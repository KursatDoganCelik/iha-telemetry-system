package com.ihaproject.service;

import com.ihaproject.model.Telemetry;
import com.ihaproject.repository.TelemetryRepository;
import com.ihaproject.util.TelemetryMover;
import lombok.Getter;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Optional;
import java.util.concurrent.ScheduledFuture;

@Service
public class SchedulerService {

   private final TelemetryRepository REPOSITORY;
   private final TaskScheduler SCHEDULER;
   private ScheduledFuture<?> runningTask;

   @Getter
   private Long activeIhaId;

   public SchedulerService(TelemetryRepository repository) {
      this.REPOSITORY = repository;

      ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
      threadPoolTaskScheduler.initialize();
      this.SCHEDULER = threadPoolTaskScheduler;
   }

   public void startMoving(Long ihaId) {
      if (runningTask != null && !runningTask.isCancelled()) {
         return;
      }

      Optional<Telemetry> optionalTelemetry = REPOSITORY.findById(ihaId);
      if (optionalTelemetry.isEmpty()) {
         return;
      }

      activeIhaId = ihaId;
      runningTask = SCHEDULER.scheduleAtFixedRate(() -> {
         Telemetry telemetry = optionalTelemetry.get();
         Telemetry updated = TelemetryMover.moveTowardsTarget(telemetry);

         if (updated.getBattery() <= 0) {
            stopMoving();
            REPOSITORY.save(updated);
            return;
         }

         if (updated.getCurrentLatitude() == updated.getTargetLatitude()
                 && updated.getCurrentLongitude() == updated.getTargetLongitude()) {
            stopMoving();
            REPOSITORY.save(updated);
            return;
         }

         REPOSITORY.save(updated);
      }, Duration.ofSeconds(3));

   }

   public void stopMoving() {
      if (runningTask != null) {
         runningTask.cancel(true);
         runningTask = null;
         activeIhaId = null;
      }
   }

}
