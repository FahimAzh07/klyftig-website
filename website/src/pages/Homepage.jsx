import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoWord from '../assets/logos/KlyftigWord.svg?react';
import Card from '../components/ProductCard';
import FeaturedProducts from '../components/FeaturedProducts';

const Homepage = () => {
  return (
    <>

        <section className='bg-klyftig-dark text-white py-24 px-6 lg:px-12'>
            <div className='text-center max-w-3xl mx-auto mt-24'>
              <div className="w-60 h-auto mx-auto md:w-100 pb-4">
                <LogoWord className="w-full h-auto " />
              </div>
              <h6 className="font-medium text-lg text-gray-300">
                Precision. Vibe. Play.
              </h6>
            </div>
            

            <div className="mt-14">
              <button className="mx-auto flex items-center justify-center bg-button-main text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
                Join the Movement
              </button>
            </div>
        </section>

        {/* Featured Products */}
        <FeaturedProducts />


        

        <section className='bg-klyftig-dark text-white py-24 px-6 lg:px-12'>
            Gaming & Lifestyle Crossover Section
        </section>

    </>
  )
}

export default Homepage


