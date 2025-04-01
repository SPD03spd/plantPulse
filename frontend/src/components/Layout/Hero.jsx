import React from "react";
import heroImg from "../../assets/ECOM_img/heroImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="PlantPulse"
        className="w-full h-[400px] md:h-[600px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-semibold tracking-tighter uppercase mb-4">
            PLANT
            <br /> PULSE
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our new plants
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
