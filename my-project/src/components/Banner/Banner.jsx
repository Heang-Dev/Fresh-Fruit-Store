import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 space-y-6 overflow-hidden md:grid-cols-2 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold uppercase lg:text-6xl"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
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
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Fruits offer a burst of vitamins and flavors, from vitamin C-rich
              oranges to antioxidant-packed berries. They’re delicious,
              nutritious, and perfect for everyday snacking.
            </motion.p>
            {/* Button section */}
            <motion.div
              variants={FadeUp(1.1)}
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

export default Banner;
