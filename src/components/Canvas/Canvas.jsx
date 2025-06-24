/* import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  p5.setup = () => {
    const cnv = p5.createCanvas(p5.windowWidth - 50, 400); //guardo el canvas en una variable
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
  return (
    <div className="canvas-container">
      <ReactP5Wrapper sketch={sketch} />;
    </div>
  );
}
 */

import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  p5.setup = () => {
    const cnv = p5.createCanvas(p5.windowWidth - 50, 400);
    p5.background(0);
    cnv.canvas.oncontextmenu = () => false; // Desactiva el clic derecho SOLO dentro del canvas
  };

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      // Detectar si es un dispositivo con pantalla táctil
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      if (isTouchDevice) {
        p5.stroke(255, 255, 0); // Amarillo en móviles
      } else if (p5.mouseButton === p5.LEFT) {
        p5.stroke(255, 0, 0); // Rojo
      } else if (p5.mouseButton === p5.RIGHT) {
        p5.stroke(0, 0, 255); // Azul
      } else {
        p5.stroke(0, 255, 0); // Verde
      }

      p5.strokeWeight(4);
      // Dibuja línea entre posiciones actuales y anteriores
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      // Dibuja punto en la posición actual
      p5.point(p5.mouseX, p5.mouseY);
    }
  };
}

export function Canvas() {
  return (
    <div className="canvas-container">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}