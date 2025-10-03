import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-3xl md:text-4xl font-extrabold italic tracking-tight" style={{ color: '#FF5722', fontFamily: 'Montserrat, sans-serif' }}>
        SWITCHUP
      </div>
      <div className="text-xs md:text-sm font-normal tracking-widest" style={{ color: '#FF5722', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.3em' }}>
        ELECTRICAL
      </div>
    </div>
  );
};

export default Logo;
