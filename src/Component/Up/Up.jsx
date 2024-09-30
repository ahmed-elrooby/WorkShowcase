
"use client"
import { useState, useEffect } from "react";

const Up = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {show && (
        <button onClick={handleTop} className="back-to-top">
          Up
        </button>
      )}
    </div>
  );
};

export default Up;
