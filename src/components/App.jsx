import React, { useState } from "react";

const [headingText, setHeadingText] = useState("Hello");
const [backgroundColor, setBackgroundColor] = useState({
  backgroundColor: "white",
});

const handleMouseOver = () => {
  setBackgroundColor("black");
};

const handleMouseOut = () => {
  setBackgroundColor("White");
};

const handleSubmit = () => {
  setHeadingText("Submitted");
};

function App() {
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={backgroundColor}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
