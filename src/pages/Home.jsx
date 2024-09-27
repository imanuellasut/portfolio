import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { MdArrowCircleDown } from 'react-icons/md';

import ImgProfile from '../assets/img/ImgProfile.png';
import BgHero from '../assets/img/BGDesktop.jpg';

function Home() {
  const { t } = useTranslation(); // Menggunakan useTranslation hook
  // State untuk menyimpan posisi kursor
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Fungsi untuk menangkap posisi kursor
    const handleMouseMove = (e) => {
      // Menghitung offset berdasarkan posisi kursor dan ukuran layar
      const x = (e.clientX - window.innerWidth / 2) / 50; // Membagi untuk efek gerakan lambat
      const y = (e.clientY - window.innerHeight / 2) / 50;

      setOffsetX(x);
      setOffsetY(y);
    };

    // Tambahkan event listener untuk mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup saat komponen unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section
      id="home"
      className="flex h-screen min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-[25px] sm:bg-top md:bg-center lg:bg-bottom lg:px-[100px] xl:bg-right"
      style={{
        backgroundImage: `url('${BgHero}')`,
      }}
    >
      <div className="mt-[42px] flex flex-col items-center lg:mt-[42px]">
        <div className="z-0">
          <img
            src={ImgProfile}
            alt=""
            width={200}
            className="h-[200px] w-[200px] rounded-full"
          />
          <span
            className="absolute right-[2vw] top-[28vh] rounded-full bg-textLight px-3 py-[4px] text-small-text font-bold text-black lg:right-[36vw] lg:top-[28vh]"
            style={{
              transform: `translate(${offsetX}px, ${offsetY}px)`, // Efek parallax berdasarkan kursor
            }}
          >
            IMANUELLASUT
          </span>
          <span
            className="absolute left-[2vw] top-[38vh] rounded-full bg-accent px-3 py-[4px] text-small-text font-bold text-textLight lg:left-[36vw] lg:top-[42vh]"
            style={{
              transform: `translate(${offsetX}px, ${offsetY}px)`, // Efek parallax berdasarkan kursor
            }}
          >
            HI, I’M WEB DEVELOPER
          </span>
        </div>

        <h1 className="mt-[32px] text-center font-hero text-hero-title-tablet font-extrabold text-white lg:w-[900px] lg:text-hero-title">
          "{t('hero.title')}"
        </h1>
        <div>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-16}
            className="mt-[42px] flex items-center gap-3 p-[12px] font-sans text-button-text font-black"
          >
            <span>Scroll Down</span>
            <MdArrowCircleDown size={25} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
