import React, { useEffect, useState } from "react";
import { TypingEffect } from "./TypingEffect";

export default function Content() {
  const [showTypingEffect, setShowTypingEffect] = useState(false);
  const [showParagraphs, setShowParagraphs] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypingEffect(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTypingEffect) {
      const timer = setTimeout(() => {
        setShowParagraphs(true);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [showTypingEffect]);

  useEffect(() => {
    if (showParagraphs) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showParagraphs]);

  return (
    <div className="text-center">
      <div
        className={`transition-opacity duration-1000 ${
          showTypingEffect ? "opacity-100" : "opacity-0"
        }`}
      >
        <TypingEffect
          classname="text-5xl text-gray-50 font-bold"
          text="Hi, I am Thayane."
          speed={80}
        />
      </div>
      <div
        className={`transition-opacity duration-1000 ${
          showParagraphs ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-gray-50 w-9/12 m-auto mb-20">
          A Fullstack Developer with a Frontend Focus from Northeastern Brazil,
          driven by a passion for technology and its power to transform lives.
        </p>
        <p className="text-gray-50 text-[18px] m-0">
          You&apos;re about to step into{" "}
          <strong> my journey in technology.</strong>
        </p>
        <p className="text-gray-50 text-[18px] m-0">
          Do you want to explore the key moments that shaped my career or jump
          straight to my projects?
        </p>
      </div>
      <div
        className={`transition-opacity duration-1000 ${
          showButtons ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-5 justify-center mt-10">
          <button className="main-button">Start the journey</button>
          <button className="secondary-button">Skip to the end</button>
        </div>
      </div>
    </div>
  );
}