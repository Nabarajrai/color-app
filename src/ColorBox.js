import React, { useContext } from "react";
import { ColorContext } from "./contexts/ColorContext";
import "./style/colorBox.css";

const ColorBox = () => {
  const { colors } = useContext(ColorContext);

  console.log(colors);
  return (
    <div className="colors">
      {colors.map((c, i) => (
        <div className="color_box" key={i} style={{ backgroundColor: c.color }}>
          <div className="detail-copy">
            <button>Copy</button>
          </div>
          <div className="detail-name">
            <h6>{c.name}</h6>
            <h5>More</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorBox;
