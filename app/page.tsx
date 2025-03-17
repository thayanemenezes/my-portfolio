'use client'

import Content from "./components/Content";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const starContainer = document.getElementById("stars");
  
    for (let i = 0; i < 300; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
  
      const sizeClass = ["small", "medium", "large"];
      const randomSize = sizeClass[Math.floor(Math.random() * sizeClass.length)];
      star.classList.add(randomSize);
  
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      star.style.left = `${randomLeft}vw`;
      star.style.top = `${randomTop}vh`;
  
      const randomDuration = Math.random() * 40 + 20; 
      const randomDelay = Math.random() * 20;
  
      star.style.animation = `animStar ${randomDuration}s linear infinite`;
      star.style.animationDelay = `${randomDelay}s`;
  
      starContainer?.appendChild(star);
    }
  }, []);

  return (
    <main>
      <div id="stars"></div>
      <Content />
    </main>
  );
}
