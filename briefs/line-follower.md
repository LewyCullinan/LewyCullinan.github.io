# Line Follower — Sensing, feedback and reliable path tracking

**Status:** Personal project

Personal robotics project. The reference photograph shows another line-following robot. Exact components and performance of my own build have not been documented here.

## Proposed architecture

Calibrate → Read track → Estimate error → Steer → Recover if lost

## The control problem

A line follower turns sensor readings into immediate steering decisions. I use it to explore calibration, feedback and the trade-off between speed and reliable cornering. The key question is how quickly to correct an offset without making the robot oscillate.




## Sensing and steering

Reflectance sensors are a common approach. Calibrated readings can provide a weighted estimate of line position; the offset from the centre becomes steering error. A proportional correction changes left and right motor commands, while a derivative term can help damp sudden changes. I would tune at a conservative speed before testing tighter bends.


Source: [Pololu — sensor calibration and line position](https://www.pololu.com/docs/0J19/all)
Source: [Pololu — line follower control example](https://github.com/pololu/pololu-3pi-plus-32u4-arduino-library/blob/master/examples/LineFollowerPID/LineFollowerPID.ino)

## Testing the limits

I would report course completion, line-loss events and lap time together over repeated runs. Gaps, intersections, lighting changes and battery condition need separate tests. If the line is lost, the robot should slow, search briefly toward the last reliable position and stop if it cannot reacquire the track.



