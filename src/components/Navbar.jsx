import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-scroll'; // Pastikan menggunakan react-scroll
import { IoCodeDownloadOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import Logo from '../assets/img/LOGO_CH.png';
import LogoBulat from '../assets/img/LOGO/logoBulat2.png';
import LengUS from '../assets/img/US.png';
import LengID from '../assets/img/ID.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndonesian, setIsIndonesian] = useState(false);

  const { t, i18n } = useTranslation(); // Menggunakan useTranslation hook

  // Fungsi untuk mengganti bahasa
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = () => {
    const newLang = isIndonesian ? 'en' : 'id'; // Ganti antara 'en' dan 'id'
    i18n.changeLanguage(newLang); // Ubah bahasa
    setIsIndonesian(!isIndonesian); // Toggle state
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsLogoClicked(!isLogoClicked); // <-- Toggle state saat logo diklik
  };

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-6 w-full -translate-x-1/2 transform lg:px-[100px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-white">
        {/* Logo */}
        <div className="">
          <img src={LogoBulat} alt="Logo" className="h-10 w-10" />
        </div>

        {/* Navigation Links */}
        <div className="glassmorphism rounded-full px-4 py-2">
          <ul className="flex space-x-6 font-medium text-gray-300">
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'home' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('home')}
                className="cursor-pointer"
              >
                {t('navbar.menu1')}
              </Link>
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'about' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('about')}
                className="cursor-pointer"
              >
                {t('navbar.menu2')}
              </Link>
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'services' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('services')}
                className="cursor-pointer"
              >
                {t('navbar.menu3')}
              </Link>
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'contact' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('contact')}
                className="cursor-pointer"
              >
                {t('navbar.menu4')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Button */}
        <button
          className="glassmorphism relative flex items-center overflow-hidden rounded-full"
          onClick={handleClick}
        >
          <div
            className={`flex items-center gap-2 transition-transform duration-500 ${isIndonesian ? 'translate-x-[-100px]' : ''}`}
          >
            <img
              src={isIndonesian ? LengUS : LengUS}
              alt={isIndonesian ? 'Indonesian Flag' : 'US Flag'}
              className={`h-8 w-8 rounded-full transition-transform duration-500 ${isIndonesian ? 'rotate-180' : ''}`}
            />
            <span className="pr-2">{isIndonesian ? 'US' : 'US'}</span>
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-transform duration-500 ${isIndonesian ? 'right-0 translate-x-0' : 'translate-x-full'}`}
          >
            <span className="pl-2">ID</span>
            <img
              src={LengID}
              alt="Indonesian Flag"
              className={`h-8 w-8 rounded-full transition-transform duration-500 ${isIndonesian ? '' : 'rotate-180'}`}
            />
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
