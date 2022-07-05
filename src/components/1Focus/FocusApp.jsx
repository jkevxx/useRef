import React, { useState, useRef } from "react";

function FocusApp() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleFocus = () => {
    // console.log(inputRef.current);
    const input = inputRef.current;
    // input.value = "value mutated";
    input.focus();

    /**
     * IN JS VANILLA WE ADD FOCUS WITH
     * const input = document.getElementById("input")
     * input.focus()
     */
  };

  return (
    <div>
      <input
        // id="input"
        ref={inputRef}
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default FocusApp;
