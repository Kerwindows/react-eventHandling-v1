import React, {useState} from "react";

function App() {
const [headingText, setHeadingText] = useState("Hello")
const [isMouseOver, setMouseOver] = useState(false)

const handleMouseOver = () => {
  setMouseOver(true)
  console.log(setMouseOver)
}

const handleMouseOut = () => {
  setMouseOver(false)
  console.log(setMouseOver)
}

const handleClick = () => {
  setHeadingText("Submitted");
}
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white"}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;