import React, { useState, useEffect, useRef } from "react";

function RenderApp() {
  const [text, setText] = useState("");

  // render1 ref=1
  // render2 ref=2
  const renderRef = useRef(1);
  console.log("first");

  // render1 ref=1
  // render2 ref=2
  useEffect(() => {
    // we can't directly modify a value, otherwise we can modify an object
    renderRef.current++;
    console.log("second");
    // render1 ref++ = 2
    // render2 ref++ = 3
  });

  return (
    <div>
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* render 1 ref=1 */}
      {/* render 2 ref=2 */}
      <h2>Renders: {renderRef.current}</h2>
    </div>
  );
}

export default RenderApp;
