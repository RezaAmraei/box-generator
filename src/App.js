import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import Box from "./components/Box";
function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);
  // const setNewColor = (newColor) => {
  //   setCurrentBoxes(newColor);
  // };
  // console.log("-------------------", currentBoxes);

  return (
    <div className="App">
      <Input setCurrentBoxes={setCurrentBoxes} currentBoxes={currentBoxes} />
      <Box currentBoxes={currentBoxes} />
    </div>
  );
}

export default App;
