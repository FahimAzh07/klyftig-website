import React from 'react'
import LogoWord from '../assets/logos/KlyftigWord.svg?react';

const Footer = () => {
  return (
<footer className="bg-klyftig-dark w-full shadow-lg px-6 lg:px-8 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
      
      {/* Brand Column */}
      <div>
        <LogoWord className="w-30 h-auto fill-current mb-3" />
        <p className="text-sm text-gray-400">Precision. Vibe. Play.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-sm font-semibold uppercase mb-3 color-main">Explore</h2>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h2 className="text-sm font-semibold uppercase mb-3 color-main">Support</h2>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping</a></li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h2 className="text-sm font-semibold uppercase mb-3 color-main">Connect</h2>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#">Discord</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitch</a></li>
        </ul>
      </div>

    </div>
  </div>
</footer>
  )
}

export default Footer