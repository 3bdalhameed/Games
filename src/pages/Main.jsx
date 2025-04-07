import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-gray-900 text-white transition-all duration-500 ease-in-out">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        Welcome to JuCC!
      </h1>
      <p className="text-lg mb-6 opacity-80">
        Chose the game.
      </p>
      <button
        onClick={() => navigate("/qr")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
      >
        QR
      </button>
    </div>
  );
};

export default MainPage;
