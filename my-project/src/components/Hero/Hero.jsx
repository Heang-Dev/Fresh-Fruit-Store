import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
import Leaf from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className="relative z-10 flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold leading-relaxed lg:text-6xl xl:leading-loose font-averia"
            >
              Healthy <br /> Fresh{" "}
              <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Welcome to our Fruit Shop! Enjoy the freshest, handpicked fruits,
              packed with natural sweetness. From everyday favorites to exotic
              treats, our selection is always in season and full of flavor.
              Taste the difference today!
            </motion.p>
          </div>
          {/* Button section */}
          <motion.div
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className="flex justify-center mt-5 md:justify-start"
          >
            <button className="flex items-center gap-2 primary-btn">
              <span>
                <IoBagHandleOutline />
              </span>
              Order Now
            </button>
          </motion.div>
        </div>
        {/* Hero Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>
        {/* Leaf section */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={Leaf}
            alt=""
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
