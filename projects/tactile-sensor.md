---
title: "A tactile Sensor Design"
slug: "tactile-sensor"
tags: ["research","sensor", "fabrication","signal processing"]
date: "2025-05-29"
image: "/img/tactile-sensor-cover.jpg"
---
This project is published on ICRA 2025: [A Highly Robust Contact Sensor for Precise Contact Detection of Fabric](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11127921) (co‑first author). This page provides additional notes, ideas, and ongoing thoughts related to the project.
## Some Intuitive Ideas
In the context of fabric detection, a sensor must be **robust** in industrial environments while providing **accurate, real-time feedback**. One of the main challenges in fabric detection is that fabric is very soft and easily deforms. As a result, a rigid sensor must offer extremely high spatial resolution and very low latency to detect contact before substantial deformation occurs. (Latency is a critical issue because fabric can deform very quickly under even a small force.)


An intuitive idea that follows from this observation is that if the sensor itself is <span style="color:rgb(150, 0, 0);">**"softer"**</span> than the fabric, the fabric will be less prone to deformation upon contact. This, in turn, allows more time for the system to detect contact while maintaining a small interaction force.

Another intuitive idea is that, since the sensor is "softer" than the fabric, it will deform more than the fabric during contact, making this deformation <span style="color:rgb(150, 0, 0);">**observable**</span> in the sensor’s output. (In fact, we found that deformation in a soft object is easier to detect and more observable than the applied force itself.)

The final structure of the sensor follows the above ideas: it's soft(with a soft membrane structure) and observe detection via deformation(with an internal optic distance sensor to detect deformation of that soft membrane).

## Fabrication
There's nothing interesting about the optic distance sensor: it is a standard time-of-flight (ToF) module with a relatively wide field of view (FoV) and relatively high spatial resolution, particularly at short range.
<figure>
  <img src="/project/sensor6.jpg">
  <figcaption>Optic sensor without the cover (I took it off to see how it works)</figcaption>
</figure>
The design of the soft membrane is more interesting: it must be softer than the fabric, yet it should maintain its shape (i.e., remain undeformed) during motion or under disturbances such as wind. After several experiments, I found that a 0.4 mm‑thick silicone gel membrane, formed into cylindrical and hemispherical shapes, is the softest configuration that can still maintain sufficient stiffness and shape stability.
<figure class="img-row">
<div class="img-wrap">
  <img src="/project/sensor1.png" style="width: 30%;">
  <img src="/project/sensor5.jpg" style="width: 55%;">
</div>
  <figcaption>Different structures that I came up with</figcaption>
</figure>
<figure class="img-row">
<div class="img-wrap">
  <img src="/project/sensor2.png"style="width: 55%;">
  <img src="/project/sensor4.png"style="width: 30%;">
</div>
  <figcaption>Testing different thicknesses & final 3D mold for casting the soft membrane</figcaption>
</figure>

A **tip** for fabricating a soft membrane is to design a proper fixing structure for the 3D mold that holds the mold securely in place. This helps ensure that the membrane maintains a uniform thickness in all directions. Consistent thickness is crucial for subsequent property analysis and algorithm design, as variations in thickness can significantly influence its performance.
<figure>
  <img src="/project/sensor7.png">
  <figcaption>The whole system</figcaption>
</figure>

## Algorithhm Design
The raw distance data from the sensor is processed by a designed Kalman Filter (which is not really interesting). The logic is also straightforward: when the distance (between the membrane and the sensor) decreases, it indicates that contact is occurring. The interesting challenge lies in finding the right trade‑off between <span style="color:rgb(150, 0, 0);">**accuracy**</span> and <span style="color:rgb(150, 0, 0);">**sensitivity**</span>.

A naive solution:
- Accuracy comes first: collect more evidence before confirming a “touch” to ensure that only genuine contact is detected.
- Sensitivity comes first: Identify contact with fewer “touch” signals, allowing faster detection but at the risk of false positives.

### Sensitivity
But how sensitive should it be? A common way is to detect the force resolution. Another important standard in this context is that the membrane should detect contact <span style="color:rgb(150, 0, 0);">**before the fabric gets compressed**</span>. Ideally, it should sense the touch while still preserving the fabric’s natural “fluffy” texture, without flattening it.

### Accuracy
By studying how the membrane physically interacts with the fabric, I found some interesting clues that support the classifier, which was developed using a mix of data‑driven methods and physical modeling.

An interesting observation: when membrane is disturbed by something light, the top surface only forms a slight indentation. But when a stronger force is applied, such as contact from clothing, especially when pressed, the bottom part of the membrane also deforms. This creates a non‑linear link between force and deformation.
<figure>
  <img src="/project/sensor8.png">
  <figcaption>How the membrane deforms with different force applied</figcaption>
</figure>

## Further Improvements

- A more solid structure from inside?
- Without touching?