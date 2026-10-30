# Robotics portfolio — project notes

# SmartWater — Solar smart irrigation with IoT

**Status:** Personal project

My project photograph shows the Arduino Uno, breadboard, LCD, battery holder, sensor and watering tube. The wider degree project also included solar power, IoT and a web dashboard; those are not all visible in this image.

## Proposed architecture

Read soil sensor → Check watering rule → Drive output → Display state → Log readings

## What I built

I built SmartWater to make irrigation respond to soil conditions instead of relying only on a fixed timer. The photographed prototype brings together an Arduino Uno, a sensor at the pot, a local LCD and tubing that carries water to the plant. The larger engineering project combined this control work with solar power, IoT connectivity and a web dashboard.




## Control and reliability

The central loop is straightforward: sample the sensor, decide whether watering is needed, drive the output and make the result visible. A practical threshold controller should use separate start and stop limits so small changes in a reading do not rapidly switch the pump. I would also limit each watering period and treat missing or implausible readings as a fault.

A sensor percentage is meaningful only after calibration in the actual soil. The on-page slider illustrates a control rule; it is a simulation rather than recorded measurements from my build.


Source: [University of Minnesota Extension — soil-moisture sensing](https://extension.umn.edu/natural-resources/conservation/agricultural-soil-and-water/irrigation/soil-moisture-sensors-for-irrigation-scheduling)

## How I would evaluate it

I would compare water delivered and time inside a suitable moisture range against a fixed watering schedule. I would also record power use, sensor faults and loss of dashboard connection. Solar power does not by itself establish water savings; the useful result is a measured improvement without stressing the plant.


Source: [FAO — solar irrigation and water management](https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/)

---

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




---

# LEO rover · autonomous block sorter — Autonomous search, retrieval and sorting

**Status:** Personal project

Photo supplied by Lewis. It shows the four-wheeled LEO rover platform. The notes describe the search and sorting architecture; the image alone does not establish a fitted manipulator or measured mission performance.

## Proposed architecture

Explore → Locate block → Approach → Retrieve → Sort → Verify

## The project

I use the LEO rover as the mobile base for an autonomous block sorter. The task is to search a bounded workspace, identify blocks, navigate to them and deliver each to its assigned location. The rover photograph shows the four-wheel platform; the sorting workflow adds perception and manipulation to that base.




## How the system fits together

A ROS 2 supervisor can track each block from first sighting to confirmed delivery. Mapping and localisation support repeatable search; navigation chooses an approach pose; a camera estimates the block label and position. A grasp planner then needs a reachable, collision-free motion for the retrieval mechanism. If a block is seen twice, it should remain one target in the task state.


Source: [Nav2 — navigation while mapping](https://docs.nav2.org/jazzy/tutorials/general_tutorials/navigation2_with_slam/navigation2_with_slam/)
Source: [MoveIt 2 — staged pick and place](https://moveit.picknik.ai/main/doc/tutorials/pick_and_place_with_moveit_task_constructor/pick_and_place_with_moveit_task_constructor.html)

## What I would verify

The test is complete only when pickup and placement are observed, not merely commanded. I would record search coverage, missed blocks, correct sorts, repeated attempts and time per delivery. Gazebo can provide repeatable layouts before testing hardware with changing block positions and partial occlusion.


Source: [Gazebo — ROS 2 integration](https://gazebosim.org/docs/latest/ros2_integration/)

---

# Wind turbine drone inspection — Aerial visual inspection of renewable-energy infrastructure

**Status:** Engineering design project

Drone photograph supplied by Lewis. The inspection workflow is an engineering design; no turbine flight or defect-detection result is claimed.

## Proposed architecture

Plan safe views → Capture images → Register coverage → Flag defects → Review evidence

## Inspection objective

A useful drone survey should show what was inspected, what was missed and which observations need another look. The aim is to capture blade images at sufficient quality and location accuracy for a reviewer to assess visible defects. ORE Catapult’s MIMRee programme is a research reference for robotic offshore wind inspection.


Source: [ORE Catapult — MIMRee offshore robotics programme](https://ore.catapult.org.uk/resource-hub/projects/mimree)

## Planning and analysis

The first stage would use a ground-level test surface with known marks before any turbine setting. A flight plan needs image overlap, standoff distance, lighting checks and a defined response to wind or lost positioning. Captured frames would be registered to a surface map, then screened for blur, glare and missed regions before defect detection.

A vision model should report candidate locations and confidence, with the original image retained for human review. An unfamiliar mark or poor image should trigger reinspection rather than a confident maintenance conclusion.




## How I would judge success

I would measure usable coverage, defect recall on a labelled test surface, false alarms and location error. A safe drone flight and a complete inspection are different outcomes; both need evidence. Offshore use would add significant environmental and operational constraints beyond a laboratory test.



