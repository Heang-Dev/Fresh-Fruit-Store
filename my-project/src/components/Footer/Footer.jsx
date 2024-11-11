import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLeaf,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 mt-12 bg-primary/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex flex-col items-center justify-between md:flex-row"
      >
        {/* Logo section */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* Social icons section */}
        <div className="flex items-center gap-4 my-3 text-2xl text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaTelegram />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
