import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeTrap = () => {
  const redirectUrl = `https://juccgamess.vercel.app/gothacked`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-red-500 animate-bounce">
        Scan Me... If You Dare 💀
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-2xl">
        <QRCodeCanvas value={redirectUrl} size={256} level="H" />
      </div>

      <p className="mt-6 text-lg text-gray-400">
        Something awaits on the other side...
      </p>
    </div>
  );
};

export default QRCodeTrap;
