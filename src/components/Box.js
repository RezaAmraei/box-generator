import React from "react";

const Box = (props) => {
  return (
    <div style={{ display: "flex" }}>
      {props.currentBoxes.map((box, i) => (
        <div
          key={i}
          style={{
            backgroundColor: box.color,
            height: `${box.height}px`,
            width: `${box.width}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Box;
