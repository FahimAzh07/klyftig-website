import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import products from '../data/productData';
import menuIcon from '../assets/icons/BurgerToggle.svg';
import searchIcon from '../assets/icons/Search.svg';
import accountIcon from '../assets/icons/AccountNavbar.svg';
import cartIcon from '../assets/icons/Cart.svg';
import closeIcon from '../assets/icons/Close.svg';
import LogoNav from '../assets/logos/KlyftigFirst.svg?react';
import LogoWord from '../assets/logos/KlyftigWord.svg?react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = products.slice(0, 2).map((item) => ({
    ...item,
    quantity: 1,
  }));
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
                <button
                  aria-label="toggle menu"
                  onClick={() => {
                    setMenuOpen((prev) => !prev);
                    setSearchOpen(false);
                  }}
                >
                  <img src={menuIcon} alt="Menu" className="h-8 w-8 filter-white" />
                </button>
                <button
                  aria-label="search"
                  onClick={() => {
                    setSearchOpen((prev) => !prev);
                    setMenuOpen(false)
                  }}
                >
                  <img src={searchIcon} alt="Search" className="h-6 w-6 filter-white" />
                </button>
              </div>

              <div className="flex-1 flex justify-center md:justify-start md:hidden ml-5">
                <LogoNav className="w-10 h-auto fill-current" />
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-5">
                <LogoNav className="w-10 h-auto fill-current" />
                <a href="#" className="text-base font-bold text-white hover:text-[#7577FF]">Esports</a>
                <a href="#" className="text-base font-bold text-white hover:text-[#7577FF]">Company</a>
                <a href="#" className="text-base font-bold text-white hover:text-[#7577FF]">Shops</a>
              </div>

              {/* Right Buttons */}
              <div className="flex items-center gap-3">
                <button
                  aria-label="search"
                  onClick={() => {
                    setSearchOpen((prev) => !prev);
                    setMenuOpen(false)
                  }}
                >
                  <img src={searchIcon} alt="Search" className="h-6 w-6 filter-white hidden md:inline cursor-pointer" />
                </button>
;
                <button>
                  <img src={accountIcon} alt="Account" className="h-8 w-8 md:hidden filter-white" />
                </button>

                {/* 🛒 Cart Icon with Badge */}
                <button onClick={() => setCartOpen(true)} className="relative">
                  <img src={cartIcon} alt="Cart" className="h-8 w-8 filter-white" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none">
                      {totalItems}
                    </span>
                  )}
                </button>

                <Link
                  to="/login"
                  className="hidden md:inline bg-button-main hover:bg-white text-black font-bold px-4 py-2 rounded-xl shadow"
                >
                  Log In
                </Link>
                <button className="hidden md:inline bg-button-main hover:bg-white text-black font-bold px-4 py-2 rounded-xl shadow">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <LogoWord className="w-32 h-auto" />
          <button onClick={() => setMenuOpen(false)}>
            <img src={closeIcon} alt="Close" className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#" className="font-bold bg-klyftig-surface p-2 text-center rounded-xl">Esports</a>
          <a href="#" className="font-bold bg-klyftig-surface p-2 text-center rounded-xl">Company</a>
          <a href="#" className="font-bold bg-klyftig-surface p-2 text-center rounded-xl">Shops</a>
        </nav>
      </div>

      {/* Backdrops */}
      {menuOpen && <div className="fixed inset-0 z-30 bg-black/30" onClick={() => setMenuOpen(false)} />}
      {searchOpen && (
        <>
          <div className="fixed top-20 left-0 w-full h-20 bg-white z-50 shadow-md flex items-center px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              autoFocus
            />
            <button onClick={() => setSearchOpen(false)} className="ml-4 text-gray-600">
              <img src={closeIcon} alt="Close" className="h-5 w-5 cursor-pointer" />
            </button>
          </div>
          <div className="fixed inset-0 z-40" onClick={() => setSearchOpen(false)} />
        </>
      )}

      {/* Cart Component */}
      <Cart isOpen={cartOpen} setIsOpen={setCartOpen} />
    </>
  );
};

export default Navbar;
