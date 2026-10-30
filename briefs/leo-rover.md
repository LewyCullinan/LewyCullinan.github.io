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
