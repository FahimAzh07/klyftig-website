import React, { useState, useEffect } from 'react';

const ProductCard = ({ name, image, description, price }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchToggle = () => {
    if (isMobile) {
      setIsTouched((prev) => !prev);
    }
  };

  const expanded = isMobile ? isTouched : false;

  return (
    <div
      className={`group w-72 bg-[#3b2f5e] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer relative ${
        expanded ? 'h-[500px]' : 'h-[400px] hover:h-[500px]'
      }`}
      onClick={handleTouchToggle}
      onTouchStart={handleTouchToggle}
    >
      {/* Shoe Image */}
      <div
        className={`w-full h-60 flex items-center justify-center transition-transform duration-500 ${
          expanded
            ? '-rotate-12 -translate-y-4'
            : 'group-hover:-rotate-30 group-hover:-translate-y-10'
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-[80%] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Text Content */}
      <div
        className={`transition-all duration-500 ${
          expanded ? 'text-left px-6' : 'text-center group-hover:text-left group-hover:px-6 px-6'
        }`}
      >
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <p className="text-gray-300">{price}</p>

        {/* Reveal Content */}
        <div
          className={`transition-all duration-500 mt-4 ${
            expanded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          <p className="text-white text-sm mb-4">{description}</p>
          <button className="bg-white text-[#3b2f5e] font-bold py-2 px-6 rounded-full shadow hover:scale-105 transition-transform duration-300 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
