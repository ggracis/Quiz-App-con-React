import React from "react";
import { useNavigate } from "react-router-dom";

export const Results = ({ score, questionsFiltered, onReset }) => {
  const navigate = useNavigate();
  const percentage = ((score / questionsFiltered.length) * 100).toFixed(0);
  const isLowScore = percentage < 50;

  return (
    <div
      className={`flex flex-col justify-evenly items-center shadow-2xl rounded-lg w-[50vw] h-[60vh] mt-20 gap-5 p-10 text-white ${
        isLowScore
          ? "shadow-red-900 bg-[linear-gradient(75deg,#b71c1c,#880e4f)]"
          : "shadow-green-900 bg-[linear-gradient(75deg,#50a25e,#9bc259)]"
      }`}
    >
      <div className="flex flex-col gap-5 text-center text-6xl font-bold">
        <span>{isLowScore ? "Que vergonha!" : "Isso aí!"}</span>
        <span
          className={`font-black bg-gradient-to-r bg-clip-text text-transparent animate-pulse text-[10rem]
        ${
          isLowScore ? "from-gray-50 to-gray-500" : "from-blue-600 to-green-800"
        }`}
        >
          {percentage}%
        </span>
        das perguntas ({score} de {questionsFiltered.length})
      </div>

      <button
        className="border mt-4 px-8 py-6 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900 text-5xl"
        onClick={() => navigate("/")} // Redirigir al listado de categorías
      >
        Bora de novo!
      </button>
    </div>
  );
};
