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
