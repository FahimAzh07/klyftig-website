import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import productData from '../data/productData';
import ProductCard from '../components/ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 hidden md:inline"
  >
    <FaChevronLeft />
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 hidden md:inline"
  >
    <FaChevronRight />
  </button>
);

const FeaturedProducts = () => {
  const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 3000, // 2560px and up (4K)
      settings: { slidesToShow: 5.9 }, // tighter gap
    },
    {
      breakpoint: 1920,
      settings: { slidesToShow: 4.3 }, // balanced gap
    },
    {
      breakpoint: 1440,
      settings: { slidesToShow: 4.1 },
    },
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480, // covers devices like 375px
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

  return (
    <section className="bg-klyftig-dark text-white py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>

      <div className="relative max-w-[2560px] mx-auto px-4 lg:px-10 2xl:px-10">
        <Slider {...settings}>
          {productData.map((product) => (
            <div key={product.id} className="px-0 sm:px-2 md:px-4 xl:px-4 2xl:px-6 w-full">
              <div className="max-w-xs mx-auto">
                <ProductCard {...product} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
