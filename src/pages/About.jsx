import React from 'react';
import Element1 from '../assets/img/element1.png';
import Element2 from '../assets/img/element2.png';

function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-screen items-center overflow-hidden rounded-t-[50px] bg-primary px-[50px] py-[25px] lg:rounded-t-[100px] lg:px-[100px] lg:py-[100px]"
    >
      <div className="relative mt-[100px] flex flex-col lg:mt-0">
        <div className="w-fit">
          <h1 className="font-hero text-section-title font-black italic text-black">
            About Me
          </h1>
          <div className="h-1 w-auto bg-black"></div>
        </div>
        <p className="my-[24px] font-sans text-body-text font-normal">
          Sebagai lulusan baru dari program studi Sistem Informasi di
          Universitas Kristen Duta Wacana, saya memiliki pengalaman praktis
          dalam mengerjakan proyek yang melibatkan perkiraan hasil panen tanaman
          jagung menggunakan metode Fuzzy Tsukamoto. Saya memiliki keahlian
          dalam UI/UX dan pemrograman web, yang saya rasa sangat relevan dengan
          minat karir saya sebagai Front-End Developer dan UI/UX Designer. Saya
          bersemangat untuk menerapkan pengetahuan dan keterampilan ini dalam
          lingkungan profesional dan berkontribusi pada tim dengan cara yang
          berarti.
        </p>
        <div className="flex flex-col gap-1 font-sans lg:text-body-text">
          <ul className="flex list-outside flex-row gap-2 font-bold">
            <li className="w-[30%] lg:w-[135px]">Nama</li>
            <li>:</li>
            <li className="w-[70%]">Reggy Charles Imanuel Lasut</li>
          </ul>

          <ul className="flex flex-row gap-2 font-bold">
            <li className="w-[30%] lg:w-[135px]">Tanggal Lahir</li>
            <li>:</li>
            <li className="w-[70%]">MARISA, 12 JANAURI 2001</li>
          </ul>

          <ul className="flex flex-row gap-2 font-bold">
            <li className="w-[30%] lg:w-[135px]">Agama</li>
            <li>:</li>
            <li className="w-[70%]">Kristen</li>
          </ul>

          <ul className="flex flex-row gap-2 font-bold">
            <li className="w-[30%] lg:w-[135px]">Alamat</li>
            <li>:</li>
            <li className="w-[70%] lg:w-[40%]">
              Dusun IV, Desa Banuroja, Kecamatan Randangan, Kab.Pohuwato,
              Prov.Gorontalo, 96268
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute -left-[500px] -top-[30px] lg:-left-[400px] lg:-top-[90px]">
        <img src={Element1} alt="" />
      </div>
      <div className="absolute hidden lg:left-[800px] lg:top-[400px] lg:block">
        <img src={Element2} alt="" />
      </div>
    </section>
  );
}

export default About;
