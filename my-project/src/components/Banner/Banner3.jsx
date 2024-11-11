import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="p-10">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 space-y-6 md:grid-cols-2 md:space-y-0 py-14 rounded-3xl"
      >
        {/* Blank div */}
        <div></div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold uppercase lg:text-6xl"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Fruits are packed with essential nutrients and come in a variety
              of flavors and textures. Citrus fruits like oranges boost immunity
              with vitamin C, while bananas provide heart-healthy potassium.
              Berries are rich in antioxidants, and tropical fruits like mangoes
              and pineapples add a refreshing sweetness. With so many health
              benefits, fruits make a tasty and nutritious choice every day.
            </motion.p>
            {/* Button section */}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center mt-5 md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
