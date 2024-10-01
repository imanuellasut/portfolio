import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-scroll'; // Pastikan menggunakan react-scroll
import { IoCodeDownloadOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import Logo from '../assets/img/LOGO_CH.png';
import LogoBulat from '../assets/img/LOGO/logoBulat2.png';
import LengUS from '../assets/img/US.png';
import LengID from '../assets/img/ID.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const { t, i18n } = useTranslation(); // Menggunakan useTranslation hook
  const { lang = 'en' } = useParams(); // Mendapatkan bahasa saat ini dari URL
  const [isIndonesian, setIsIndonesian] = useState(lang === 'id'); // Cek apakah bahasa saat ini adalah Indonesia
  const navigate = useNavigate(); // Untuk mengubah rute

  const handleClick = () => {
    const newLang = isIndonesian ? 'en' : 'id'; // Ganti antara 'en' dan 'id'
    const currentHash = window.location.hash; // Menangkap hash saat ini, misalnya #about
    i18n.changeLanguage(newLang); // Ubah bahasa
    setIsIndonesian(!isIndonesian); // Toggle state
    navigate(`/${newLang}${currentHash}`); // Perbarui URL dengan bahasa dan hash yang baru
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-transparent py-6">
      <div className="container mx-auto flex items-center justify-center px-4">
        {/* Logo */}
        <a href={`/portfolio/${lang}`} className="absolute left-0 ml-[100px]">
          <img src={LogoBulat} alt="Logo" className="h-10 w-10" />
        </a>

        {/* Navigation Links */}
        <div className="glassmorphism rounded-full px-6 py-2">
          <ul className="flex space-x-6 font-medium text-gray-300">
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'home' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('home')}
                className="cursor-pointer"
                onClick={() => navigate(`/${isIndonesian ? 'id' : 'en'}#home`)}
              >
                {t('navbar.menu1')}
              </ScrollLink>
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'about' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('about')}
                className="cursor-pointer"
                onClick={() => navigate(`/${isIndonesian ? 'id' : 'en'}#about`)}
              >
                {t('navbar.menu2')}
              </ScrollLink>
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'services' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <ScrollLink
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('services')}
                className="cursor-pointer"
                onClick={() => navigate(`/${isIndonesian ? 'id' : 'en'}#work`)}
              >
                {t('navbar.menu3')}
              </ScrollLink>
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              {activeSection === 'contact' && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('contact')}
                className="cursor-pointer"
                onClick={() =>
                  navigate(`/${isIndonesian ? 'id' : 'en'}#contact`)
                }
              >
                {t('navbar.menu4')}
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="absolute right-0 mr-[100px] text-white">
          <button
            className="glassmorphism relative flex items-center overflow-hidden rounded-full"
            onClick={handleClick}
          >
            <div
              className={`flex items-center transition-transform duration-500 ${isIndonesian ? 'translate-x-[-100px]' : 'left-0 translate-x-0'}`}
            >
              <img
                src={isIndonesian ? LengUS : LengUS}
                alt={isIndonesian ? 'Indonesian Flag' : 'US Flag'}
                className={`h-8 w-8 rounded-full transition-transform duration-500 ${isIndonesian ? 'rotate-180' : ''}`}
              />
              <span className="px-2">{isIndonesian ? 'US' : 'US'}</span>
            </div>
            <div
              className={`absolute flex items-center transition-transform duration-500 ${isIndonesian ? 'right-0 translate-x-0' : 'translate-x-[100px]'}`}
            >
              <span className="px-2">ID</span>
              <img
                src={LengID}
                alt="Indonesian Flag"
                className={`h-8 w-8 rounded-full transition-transform duration-500 ${isIndonesian ? '' : 'rotate-180'}`}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
