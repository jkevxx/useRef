import React, { useState, useEffect, useRef } from "react";

function ScrollAnimationApp() {
  const [background, setBackground] = useState("#2a2f");
  const divRef = useRef();

  const handleScroll = () => {
    const div = divRef.current;
    const { y } = div.getBoundingClientRect();
    // console.log(y);
    const backgroundColor = y <= 0 ? "orange" : "pink";
    setBackground(backgroundColor);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ height: "180vh", background }}>
        <h2>Scroll to change background-color</h2>
      </div>
    </div>
  );
}

export default ScrollAnimationApp;
