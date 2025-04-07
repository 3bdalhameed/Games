import React, { useEffect, useState } from "react";
import Hacker from "./img/download.gif";

const GotHacked = () => {
  const [text, setText] = useState("YOU GOT HACKED!");
  const [glitch, setGlitch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "█▓▒░!@#$%&*<>xX|/\\";
      const glitchy = text
        .split("")
        .map(() =>
          Math.random() > 0.5
            ? chars[Math.floor(Math.random() * chars.length)]
            : " "
        )
        .join("");
      setGlitch(glitchy);
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center flex-col text-green-400 font-mono text-3xl p-6">
        <img src={Hacker} alt="Hacker" />
      <div className="animate-pulse tracking-widest">{glitch}</div>
      <p className="mt-6 text-lg text-white opacity-60">Nice try 👾</p>
    </div>
  );
};

export default GotHacked;
