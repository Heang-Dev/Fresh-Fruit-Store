import React from "react";
import BannerPng from "../../assets/fruit-plate2.png";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 space-y-6 overflow-hidden md:grid-cols-2 md:space-y-0 py-14 md:py-24">
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
              Online Fruit Store
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
            {/* Button section */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center mt-5 md:justify-start"
            >
              <button className="primary-btn">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[400px] md:max-w-[400px] h-full object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
