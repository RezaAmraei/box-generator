import React, { useState } from "react";

const Input = (props) => {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let holder = [...props.currentBoxes];
    let box = {
      color,
      height,
      width,
    };
    holder.push(box);
    props.setCurrentBoxes(holder);
    setColor("");
    setHeight("");
    setWidth("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Color</label>
        <input onChange={(e) => setColor(e.target.value)} value={color} />
        <label>Height</label>
        <input
          type="number"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <label>Width</label>
        <input
          type="number"
          onChange={(e) => setWidth(e.target.value)}
          value={width}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Input;
