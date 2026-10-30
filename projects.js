window.PORTFOLIO_PROJECTS = [
  {
    "id": "smartwater",
    "number": "01",
    "title": "SmartWater",
    "subtitle": "Solar smart irrigation with IoT",
    "category": "Arduino / Automation & IoT",
    "status": "Personal project",
    "filters": [
      "embedded"
    ],
    "image": "smartwater-photo.png",
    "summary": "My Arduino-based irrigation prototype reads soil conditions and controls watering around a real plant. I built it as part of my solar smart irrigation and IoT engineering project, which received 87%.",
    "tags": [
      "Arduino",
      "Soil sensing",
      "Irrigation",
      "IoT dashboard"
    ],
    "context": "My project photograph shows the Arduino Uno, breadboard, LCD, battery holder, sensor and watering tube. The wider degree project also included solar power, IoT and a web dashboard; those are not all visible in this image.",
    "flow": [
      "Read soil sensor",
      "Check watering rule",
      "Drive output",
      "Display state",
      "Log readings"
    ],
    "sections": [
      {
        "title": "What I built",
        "paragraphs": [
          "I built SmartWater to make irrigation respond to soil conditions instead of relying only on a fixed timer. The photographed prototype brings together an Arduino Uno, a sensor at the pot, a local LCD and tubing that carries water to the plant. The larger engineering project combined this control work with solar power, IoT connectivity and a web dashboard."
        ]
      },
      {
        "title": "Control and reliability",
        "paragraphs": [
          "The central loop is straightforward: sample the sensor, decide whether watering is needed, drive the output and make the result visible. A practical threshold controller should use separate start and stop limits so small changes in a reading do not rapidly switch the pump. I would also limit each watering period and treat missing or implausible readings as a fault.",
          "A sensor percentage is meaningful only after calibration in the actual soil. The on-page slider illustrates a control rule; it is a simulation rather than recorded measurements from my build."
        ],
        "sources": [
          {
            "label": "University of Minnesota Extension — soil-moisture sensing",
            "url": "https://extension.umn.edu/natural-resources/conservation/agricultural-soil-and-water/irrigation/soil-moisture-sensors-for-irrigation-scheduling"
          }
        ]
      },
      {
        "title": "How I would evaluate it",
        "paragraphs": [
          "I would compare water delivered and time inside a suitable moisture range against a fixed watering schedule. I would also record power use, sensor faults and loss of dashboard connection. Solar power does not by itself establish water savings; the useful result is a measured improvement without stressing the plant."
        ],
        "sources": [
          {
            "label": "FAO — solar irrigation and water management",
            "url": "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/"
          }
        ]
      }
    ],
    "demo": "water",
    "imageAlt": "Lewis’s SmartWater prototype with Arduino, LCD, soil sensor, tubing and plant",
    "imageKind": "supplied"
  },
  {
    "id": "line-follower",
    "number": "02",
    "title": "Line Follower",
    "subtitle": "Sensing, feedback and reliable path tracking",
    "category": "Mobile robotics / Control",
    "status": "Personal project",
    "filters": [
      "autonomy"
    ],
    "image": "reference-2.jpg",
    "summary": "My line-following robot is a hands-on control project: sense a marked track, estimate where it sits relative to the robot and adjust steering before a small error becomes a missed turn.",
    "tags": [
      "Line tracking",
      "Calibration",
      "Feedback control"
    ],
    "context": "Personal robotics project. The reference photograph shows another line-following robot. Exact components and performance of my own build have not been documented here.",
    "flow": [
      "Calibrate",
      "Read track",
      "Estimate error",
      "Steer",
      "Recover if lost"
    ],
    "sections": [
      {
        "title": "The control problem",
        "paragraphs": [
          "A line follower turns sensor readings into immediate steering decisions. I use it to explore calibration, feedback and the trade-off between speed and reliable cornering. The key question is how quickly to correct an offset without making the robot oscillate."
        ]
      },
      {
        "title": "Sensing and steering",
        "paragraphs": [
          "Reflectance sensors are a common approach. Calibrated readings can provide a weighted estimate of line position; the offset from the centre becomes steering error. A proportional correction changes left and right motor commands, while a derivative term can help damp sudden changes. I would tune at a conservative speed before testing tighter bends."
        ],
        "sources": [
          {
            "label": "Pololu — sensor calibration and line position",
            "url": "https://www.pololu.com/docs/0J19/all"
          },
          {
            "label": "Pololu — line follower control example",
            "url": "https://github.com/pololu/pololu-3pi-plus-32u4-arduino-library/blob/master/examples/LineFollowerPID/LineFollowerPID.ino"
          }
        ]
      },
      {
        "title": "Testing the limits",
        "paragraphs": [
          "I would report course completion, line-loss events and lap time together over repeated runs. Gaps, intersections, lighting changes and battery condition need separate tests. If the line is lost, the robot should slow, search briefly toward the last reliable position and stop if it cannot reacquire the track."
        ]
      }
    ],
    "demo": "line",
    "imageCredit": "HimaliKhabar / Wikimedia Commons",
    "imageSource": "https://commons.wikimedia.org/wiki/File:LineFollower.jpg",
    "imageAlt": "Photograph of a line follower robot; reference image, not my build."
  },
  {
    "id": "leo-rover",
    "number": "03",
    "title": "LEO rover · autonomous block sorter",
    "subtitle": "Autonomous search, retrieval and sorting",
    "category": "Mobile robotics / Autonomous manipulation",
    "status": "Personal project",
    "filters": [
      "autonomy"
    ],
    "image": "leo-rover-photo.png",
    "imageKind": "supplied",
    "imageAlt": "Lewis’s four-wheeled LEO rover photographed from above",
    "summary": "My LEO rover is the mobile platform for an autonomous block-sorting project: searching an area, finding blocks and delivering them to the correct destination. It brings navigation and object handling into one task.",
    "tags": [
      "LEO rover",
      "Autonomous search",
      "Block sorting",
      "ROS 2"
    ],
    "context": "Photo supplied by Lewis. It shows the four-wheeled LEO rover platform. The notes describe the search and sorting architecture; the image alone does not establish a fitted manipulator or measured mission performance.",
    "flow": [
      "Explore",
      "Locate block",
      "Approach",
      "Retrieve",
      "Sort",
      "Verify"
    ],
    "sections": [
      {
        "title": "The project",
        "paragraphs": [
          "I use the LEO rover as the mobile base for an autonomous block sorter. The task is to search a bounded workspace, identify blocks, navigate to them and deliver each to its assigned location. The rover photograph shows the four-wheel platform; the sorting workflow adds perception and manipulation to that base."
        ]
      },
      {
        "title": "How the system fits together",
        "paragraphs": [
          "A ROS 2 supervisor can track each block from first sighting to confirmed delivery. Mapping and localisation support repeatable search; navigation chooses an approach pose; a camera estimates the block label and position. A grasp planner then needs a reachable, collision-free motion for the retrieval mechanism. If a block is seen twice, it should remain one target in the task state."
        ],
        "sources": [
          {
            "label": "Nav2 — navigation while mapping",
            "url": "https://docs.nav2.org/jazzy/tutorials/general_tutorials/navigation2_with_slam/navigation2_with_slam/"
          },
          {
            "label": "MoveIt 2 — staged pick and place",
            "url": "https://moveit.picknik.ai/main/doc/tutorials/pick_and_place_with_moveit_task_constructor/pick_and_place_with_moveit_task_constructor.html"
          }
        ]
      },
      {
        "title": "What I would verify",
        "paragraphs": [
          "The test is complete only when pickup and placement are observed, not merely commanded. I would record search coverage, missed blocks, correct sorts, repeated attempts and time per delivery. Gazebo can provide repeatable layouts before testing hardware with changing block positions and partial occlusion."
        ],
        "sources": [
          {
            "label": "Gazebo — ROS 2 integration",
            "url": "https://gazebosim.org/docs/latest/ros2_integration/"
          }
        ]
      }
    ]
  },
  {
    "id": "wind-drone-inspection",
    "number": "04",
    "title": "Wind turbine drone inspection",
    "subtitle": "Aerial visual inspection of renewable-energy infrastructure",
    "category": "Offshore wind / Drone inspection",
    "status": "Engineering design project",
    "filters": [
      "design"
    ],
    "image": "wind-drone-inspection-photo.png",
    "imageKind": "supplied",
    "imageAlt": "Quadcopter supplied by Lewis, photographed on the ground",
    "summary": "A drone inspection design for capturing turbine-blade imagery, checking coverage and flagging defects for human review. The attached drone photo shows the aircraft platform; inspection results are a proposed next step.",
    "tags": [
      "Aerial robotics",
      "Inspection planning",
      "Computer vision"
    ],
    "context": "Drone photograph supplied by Lewis. The inspection workflow is an engineering design; no turbine flight or defect-detection result is claimed.",
    "flow": [
      "Plan safe views",
      "Capture images",
      "Register coverage",
      "Flag defects",
      "Review evidence"
    ],
    "sections": [
      {
        "title": "Inspection objective",
        "paragraphs": [
          "A useful drone survey should show what was inspected, what was missed and which observations need another look. The aim is to capture blade images at sufficient quality and location accuracy for a reviewer to assess visible defects. ORE Catapult’s MIMRee programme is a research reference for robotic offshore wind inspection."
        ],
        "sources": [
          {
            "label": "ORE Catapult — MIMRee offshore robotics programme",
            "url": "https://ore.catapult.org.uk/resource-hub/projects/mimree"
          }
        ]
      },
      {
        "title": "Planning and analysis",
        "paragraphs": [
          "The first stage would use a ground-level test surface with known marks before any turbine setting. A flight plan needs image overlap, standoff distance, lighting checks and a defined response to wind or lost positioning. Captured frames would be registered to a surface map, then screened for blur, glare and missed regions before defect detection.",
          "A vision model should report candidate locations and confidence, with the original image retained for human review. An unfamiliar mark or poor image should trigger reinspection rather than a confident maintenance conclusion."
        ]
      },
      {
        "title": "How I would judge success",
        "paragraphs": [
          "I would measure usable coverage, defect recall on a labelled test surface, false alarms and location error. A safe drone flight and a complete inspection are different outcomes; both need evidence. Offshore use would add significant environmental and operational constraints beyond a laboratory test."
        ]
      }
    ]
  }
];
