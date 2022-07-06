import React, { useState, useRef } from "react";

function CopyApp() {
  const [text, setText] = useState("Hi");
  const [isCopied, setIsCopied] = useState(false);

  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    // console.log(input);
    input.select();
    document.execCommand("copy");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      {isCopied && <p>Copied</p>}
    </div>
  );
}

export default CopyApp;
