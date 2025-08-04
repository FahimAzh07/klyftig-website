import React from 'react';

const ProductCard = ({name,image,description,price}) => {
  return (
    <div className="group w-72 h-[400px] bg-[#3b2f5e] rounded-3xl overflow-hidden shadow-xl hover:h-[500px] transition-all duration-500 cursor-pointer relative">
      {/* Shoe Image */}
      <div className="w-full h-60 flex items-center justify-center transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-y-4">
        <img
          src={image}
          alt={name}
          className="w-[80%] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Text Content */}
      <div className="text-center px-6 transition-all duration-500 group-hover:text-left group-hover:px-6">
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <p className="text-gray-300">{price}</p>

        {/* Reveal on hover */}
        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mt-4">
          <p className="text-white text-sm mb-4">
            {description}
          </p>
          <button className="bg-white text-[#3b2f5e] font-bold py-2 px-6 rounded-full shadow hover:scale-105 transition-transform duration-300 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
