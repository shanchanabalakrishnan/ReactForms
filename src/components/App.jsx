import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
    event.prventDefault();
  }

  return (
    <div>
      <h1>Hello{name}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default App;
