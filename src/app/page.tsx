"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Navbar } from "~/_components/Navbar";
import { Footer } from "~/_components/Footer";
import { Struct_Logo } from "~/_components/Struct";

export default function HomePage() {
  const [typingText, setTypingText] = useState("");
  const CompleteText = "Atuando no mercado de desenvolvimento web desde 2014.";

  useEffect(() => {
    const typeText = async () => {
      setTypingText(""); //comeca vazio

      for (let i = 0; i < CompleteText.length; i++) {
        setTypingText((previousText) => previousText + CompleteText.charAt(i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    };

    typeText();
  }, []); // lista vazia eh para rodar apenas uma vez

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32">
        <h1 className="text-center text-[150px] text-white/70">
          <span className="text-blue-400">{"{"}</span>
          struct
          <span className="text-blue-400">{"}"}</span>
        </h1>
        <p className="text-[25px] text-white/60">
          {typingText}
          <span className="ml-1 animate-pulse font-light text-yellow-100">
            |
          </span>
        </p>
      </div>

      <Footer />
    </main>
  );
}
