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



