import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  p5.setup = () => {
    const cnv = p5.createCanvas(600, 400); //guardo el canvas en una variable
    p5.background(0); // negro
    cnv.canvas.oncontextmenu = () => false; // desactiva clic derecho solo en el canvas
  };

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      if (p5.mouseButton === p5.LEFT) {
        p5.stroke(255, 0, 0); // rojo
      } else if (p5.mouseButton === p5.RIGHT) {
        p5.stroke(0, 0, 255); // azul
      } else {
        p5.stroke(0, 255, 0); // verde
      }
      p5.strokeWeight(4);
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };
}

export function Canvas() {
  return <ReactP5Wrapper sketch={sketch} />;
}
