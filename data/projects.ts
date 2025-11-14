/** @format */
export const projects = {
  title: "Projects",
  items: [{
    title: "My First ELEC Project",
    slug: "elec1100-project",
    tags: ["course project","sensor","circuit","autonomous vehicle"],
    image: "/img/elec1100-cover.png",
    content: ""
  },
{
    title: "A tactile Sensor Design",
    slug: "tactile-sensor",
    tags: ["research","sensor","fabrication","signal processing"],
    image: "/img/tactile-sensor-cover.jpg",
    content: "This project is published on ICRA 2025: [A Highly Robust Contact Sensor for Precise Contact Detection of Fabric](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11127921)(co‑first author). This page provides additional notes, ideas, and ongoing thoughts related to the project.\n## Some Intuitive Ideas\nIn the context of fabric detection, a sensor must be **robust** in industrial environments while providing **accurate, real-time feedback**. One of the main challenges in fabric detection is that fabric is very soft and easily deforms. As a result, a rigid sensor must offer extremely high spatial resolution and very low latency to detect contact before substantial deformation occurs. (Latency is a critical issue because fabric can deform very quickly under even a small force.)\n\n\nAn intuitive idea that follows from this observation is that if the sensor itself is <span style=\"color:rgb(150, 0, 0);\">**\"softer\"**</span> than the fabric, the fabric will be less prone to deformation upon contact. This, in turn, allows more time for the system to detect contact while maintaining a small interaction force.\n\nAnother intuitive idea is that, since the sensor is \"softer\" than the fabric, it will deform more than the fabric during contact, making this deformation <span style=\"color:rgb(150, 0, 0);\">**observable**</span> in the sensor’s output. (In fact, we found that deformation in a soft object is easier to detect and more observable than the applied force itself.)\n\nThe final structure of the sensor follows the above ideas: it's soft(with a soft membrane structure) and observe detection via deformation(with an internal optic distance sensor to detect deformation of that soft membrane).\n\n## Fabrication\nThere's nothing interesting about the optic distance sensor: it is a standard time-of-flight (ToF) module with a relatively wide field of view (FoV) and relatively high spatial resolution, particularly at short range.\n<figure>\n  <img src=\"/project/sensor6.jpg\">\n  <figcaption>Optic sensor without the cover (I took it off to see how it works)</figcaption>\n</figure>\nThe design of the soft membrane is more interesting: it must be softer than the fabric, yet it should maintain its shape (i.e., remain undeformed) during motion or under disturbances such as wind. After several experiments, I found that a 0.4 mm‑thick silicone gel membrane, formed into cylindrical and hemispherical shapes, is the softest configuration that can still maintain sufficient stiffness and shape stability.\n<figure class=\"img-row\">\n<div class=\"img-wrap\">\n  <img src=\"/project/sensor1.png\" style=\"width: 30%;\">\n  <img src=\"/project/sensor5.jpg\" style=\"width: 55%;\">\n</div>\n  <figcaption>Different structures that I came up with</figcaption>\n</figure>\n<figure class=\"img-row\">\n<div class=\"img-wrap\">\n  <img src=\"/project/sensor2.png\"style=\"width: 55%;\">\n  <img src=\"/project/sensor4.png\"style=\"width: 30%;\">\n</div>\n  <figcaption>Testing different thicknesses & final 3D mold for casting the soft membrane</figcaption>\n</figure>\n"
  }],
};
