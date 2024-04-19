"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  return (
    <div className="flex mt-8 flex-col max-w-7xl mx-auto px-8 ">
      <div className="flex justify-center items-center">
        <h2 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl font-spaceGrotesk ">
          Our Official Partners
        </h2>
      </div>
      <Marquee className="py-4 " pauseOnHover={true} speed={20}>
        <div className="flex md:space-x-30 space-x-14 items-center ">
          <Image
            src="/assets/logos/hutch.png"
            width={150}
            height={100}
            alt="abans"
            className="ml-16 filter grayscale"
          />
          <Image
            src="/assets/logos/abans.png"
            width={150}
            height={100}
            alt="abans"
            className="filter grayscale"
          />
          <Image
            src="/assets/logos/daraz.png"
            width={150}
            height={100}
            alt="abans"
            className="filter grayscale"
          />

          <Image
            src="/assets/logos/koko.png"
            width={150}
            height={100}
            alt="abans"
            className="filter grayscale"
          />

          <Image
            src="/assets/logos/singer.png"
            width={150}
            height={100}
            alt="abans"
            className="filter grayscale"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoSlider;
