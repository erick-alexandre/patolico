"use client";

import { useState, useRef } from "react";
import { GiPlasticDuck } from "react-icons/gi";

export default function Home() {
  const [patinhos, setPatinhos] = useState(0);
  const [showMsg, setShowMsg] = useState(false);
  const [ultimoClick, setUltimoClick] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // controla o timeout

  const handleDuckClick = () => {
    const newCount = patinhos + 1;
    setPatinhos(newCount);
    setUltimoClick(newCount);
    setShowMsg(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowMsg(false);
      timeoutRef.current = null;
    }, 3000);
  };

  const getMensagem = () => {
    if (ultimoClick === 1) return "Você achou seu primeiro patinho!";
    if (ultimoClick === 3) return "Três patinhos! Tá ficando bom nisso 🐥";
    if (ultimoClick === 7) return "Sete patinhos? Você é um caçador nato!";
    if (ultimoClick === 50) return "Pega o pato, quen quen quen quen";
    if (ultimoClick === 100) return `Uau! ${ultimoClick} patinhos! Você é um patólico!!!!`;
    if (ultimoClick >= 10) return `Uau! Já achou ${ultimoClick} patinhos!`;
    return `Você achou ${ultimoClick} patinho${ultimoClick !== 1 ? "s" : ""}!`;
  };

  return (
    <main className="w-screen h-screen bg-[#2b889b] relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 text-center px-4">
          <h1 className="text-4xl font-bold text-amber-400">O que diz um pato para outro pato?</h1>
          <h2 className="text-2xl font-bold text-white">– Estamos empatados!</h2>

          <button onClick={handleDuckClick} className="relative group transition-transform active:scale-90">
            <GiPlasticDuck className="w-80 h-60 text-amber-300 drop-shadow-lg" />
            {showMsg && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-200 text-black px-4 py-1 rounded-full shadow-lg animate-fade-in-out text-sm font-bold">
                {getMensagem()}
              </span>
            )}
          </button>

          <p className="text-3xl font-bold text-white">Erro 404. Página não encontrada</p>
        </div>
      </div>
    </main>
  );
}
