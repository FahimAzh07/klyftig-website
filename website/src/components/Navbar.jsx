import React, { useEffect, useState } from 'react';
import menuIcon from '../assets/icons/BurgerToggle.svg';
import searchIcon from '../assets/icons/Search.svg';
import accountIcon from '../assets/icons/AccountNavbar.svg';
import cartIcon from '../assets/icons/Cart.svg';
import closeIcon from '../assets/icons/Close.svg';
import LogoNav from '../assets/logos/KlyftigFirst.svg?react';
import LogoWord from '../assets/logos/KlyftigWord.svg?react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScroll
          ? 'backdrop-blur-md bg-klyftig-dark/70 shadow-md'
          : 'bg-klyftig-dark'
      }`}
    >
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-[2560px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu & Search */}
            <div className="flex gap-2 md:hidden">
              <button aria-label="toggle menu" onClick={() => setMenuOpen(true)}>
                <img src={menuIcon} alt="Menu toggle" className="h-8 w-8 filter-white" />
              </button>
              <button aria-label="search" onClick={() => setSearchOpen(true)}>
                <img src={searchIcon} alt="Search" className="h-6 w-6 filter-white" />
              </button>
            </div>

            <div className="flex-1 flex justify-center md:justify-start md:hidden ml-5">
              <LogoNav className="w-10 h-auto fill-current" alt="logo" />
            </div>

            {/* Desktop Logo and Links */}
            <div className="hidden md:flex items-center gap-5">
              <LogoNav className="w-10 h-auto fill-current" alt="logo" />
              <a className="text-base font-bold cursor-pointer text-white hover:text-[#7577FF] transition-all duration-300" href="#">Esports</a>
              <a className="text-base font-bold cursor-pointer text-white hover:text-[#7577FF] transition-all duration-300" href="#">Company</a>
              <a className="text-base font-bold cursor-pointer text-white hover:text-[#7577FF] transition-all duration-300" href="#">Shops</a>
            </div>

            {/* Icons and Buttons */}
            <div className="flex items-center gap-4">
              <button aria-label="search" onClick={() => setSearchOpen(true)}>
                <img src={searchIcon} alt="Search" className="h-6 w-6 filter-white cursor-pointer hidden md:inline" />
              </button>

              <button aria-label="account menu">
                <img src={accountIcon} alt="Account" className="h-8 w-8 md:hidden cursor-pointer filter-white" />
              </button>

              <button aria-label="shopping bag">
                <img src={cartIcon} alt="Cart" className="h-8 w-8 cursor-pointer filter-white" />
              </button>

              <button className="hidden md:inline bg-button-main text-black font-bold px-4 py-2 rounded-xl shadow min-w-fit cursor-pointer hover:mainColor">
                Log In
              </button>
              <button className="hidden md:inline bg-button-main text-black font-bold px-4 py-2 rounded-xl shadow min-w-fit cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <LogoWord className="w-30 h-auto fill-current" />
          <button onClick={() => setMenuOpen(false)}>
            <img src={closeIcon} alt="Close" className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#" className="text-black font-bold bg-klyftig-surface p-2 text-center rounded-xl">Esports</a>
          <a href="#" className="text-black font-bold bg-klyftig-surface p-2 text-center rounded-xl">Company</a>
          <a href="#" className="text-black font-bold bg-klyftig-surface p-2 text-center rounded-xl">Shops</a>
        </nav>
      </div>

      {/* Optional Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed top-20 left-0 w-full h-20 bg-white z-50 shadow-md flex items-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button onClick={() => setSearchOpen(false)} className="ml-4 text-gray-600">
            <img src={closeIcon} alt="Close" className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Search Backdrop */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setSearchOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
