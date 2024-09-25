import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { IoCodeDownloadOutline } from 'react-icons/io5';

import Logo from '../assets/img/LOGO_CH.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsLogoClicked(!isLogoClicked); // <-- Toggle state saat logo diklik
  };

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-6 -translate-x-1/2 transform">
      {/* Navbar Desktop and Tablet */}
      <div className="relative mx-auto hidden items-center justify-center overflow-hidden font-sans text-navbar-phone text-textLight lg:flex lg:text-navbar-tablet">
        {/* Menu Items */}
        <ul
          className={`bg-background ${isLogoClicked ? 'flex h-auto w-[160px] items-center rounded-full px-[8px] py-[12px] transition-all duration-300 ease-in' : 'flex h-auto w-full items-center rounded-full px-[12px] py-[12px] transition-all duration-300'}`}
        >
          {/* Menu Item Group 1 */}
          <li
            className={`${isLogoClicked ? '-translate-x-80 transition-transform duration-100 ease-out' : 'transition-transform duration-500 ease-linear'}`}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection('home')}
              className={`cursor-pointer px-[8px] py-[8px] hover:text-primary ${activeSection === 'home' ? 'font-semibold text-primary' : 'text-textLight'}`}
            >
              Home
            </Link>
          </li>
          <li
            className={`ml-[24px] ${isLogoClicked ? '-translate-x-80 transition-transform duration-100 ease-out' : 'transition-transform duration-300 ease-linear'}`}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-16}
              spy={true}
              onSetActive={() => setActiveSection('about')}
              className={`cursor-pointer px-[8px] py-[8px] hover:text-primary ${activeSection === 'about' ? 'font-semibold text-primary' : 'text-textLight'}`}
            >
              About
            </Link>
          </li>

          {/* Logo */}
          <li
            className={`flex items-center ${isLogoClicked ? 'absolute mx-auto items-center' : 'mx-[48px]'}`}
            onClick={handleLogoClick}
          >
            <img
              src={Logo}
              alt="Logo"
              width={50}
              className={`max-w-min ${isLogoClicked ? 'transition-all duration-[320ms] ease-in-out' : 'transition-transform duration-100 ease-in-out'}`}
            />
            <p
              className={`rounded-full bg-textLight px-[8px] py-[8px] text-small-text font-black text-background ${isLogoClicked ? 'font-sans transition-all duration-[320ms] ease-in-out' : 'absolute translate-x-72 transition-transform duration-100 ease-in-out'}`}
            >
              PORTFOLIO
            </p>
          </li>

          {/* Menu Item Group 2 */}
          <li
            className={`mr-[24px] ${isLogoClicked ? 'translate-x-80 transition-transform duration-100 ease-out' : 'transition-transform duration-300 ease-linear'}`}
          >
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="cursor-pointer px-[8px] py-[8px] transition-colors hover:text-primary"
            >
              Work
            </Link>
          </li>
          <li
            className={` ${isLogoClicked ? 'translate-x-80 transition-transform duration-100 ease-out' : 'transition-transform duration-500 ease-linear'}`}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-[8px] py-[8px] hover:text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar Phone */}
      <div className="flex flex-col items-center justify-center lg:hidden">
        <div className="flex w-[200px] justify-between rounded-full bg-background px-[12px] py-[12px]">
          <img src={Logo} alt="Logo" width={50} />
          {/* Tombol label dengan event onClick untuk toggle menu */}
          <label
            className={`cursor-pointer content-center items-center rounded-full bg-textLight px-[6px] transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
            onClick={toggleMenu}
          >
            <IoCodeDownloadOutline size={25} />
          </label>
        </div>
        {/* Conditional rendering untuk menampilkan ul berdasarkan state */}
        {isMenuOpen && (
          <ul className="menu mt-4 flex w-[200px] flex-col gap-6 rounded-[24px] bg-background px-2 py-[24px] text-center text-navbar-phone text-textLight">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActiveSection('home')}
                className={`cursor-pointer px-[8px] py-[8px] hover:text-primary ${activeSection === 'home' ? 'font-semibold text-primary' : 'text-textLight'}`}
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActiveSection('about')}
                className={`cursor-pointer px-[8px] py-[8px] hover:text-primary ${activeSection === 'about' ? 'font-semibold text-primary' : 'text-textLight'}`}
              >
                About
              </Link>
            </li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
