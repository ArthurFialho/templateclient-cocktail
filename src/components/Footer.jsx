import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="text-sm sm:text-base font-medium tracking-wide uppercase">
          Arthur Fialho © — Some rights reserved
        </p>
        <span className="mt-2 text-xs opacity-80 text-red-400">
          made with love
        </span>
      </div>
    </footer>
  );
};

export default Footer;
