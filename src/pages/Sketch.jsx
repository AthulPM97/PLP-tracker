import React, { useRef, useState, useEffect } from "react";
import p5 from "p5";

const Sketch = () => {
  const canvasRef = useRef(null);
  const [circles, setCircles] = useState([]);
  const [hueValue, setHueValue] = useState(0);

  useEffect(() => {
    const sketch = (p) => {
      let canvas;

      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(0);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.noStroke();
      };

      p.draw = () => {
        p.background(0);
        for (let i = 0; i < circles.length; i++) {
          let c = circles[i];
          p.stroke(c.hue, 100, 100, c.alpha);
          p.strokeWeight(3);
          p.noFill();
          p.ellipse(c.x, c.y, 50, 50);
          c.alpha -= 5;
        }
        setCircles(circles.filter((c) => c.alpha > 0));
      };

      setInterval(() => {
        setHueValue(p.random(0, 360));
        setCircles([...circles, { x: p.random(p.width), y: p.random(p.height), hue: hueValue, alpha: 50 }]);
      }, 100);
    };

    const p5canvas = new p5(sketch, canvasRef.current);

    return () => {
      p5canvas.remove();
    };
  }, [circles, hueValue]);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
