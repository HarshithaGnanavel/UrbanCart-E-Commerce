import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 py-6 bg-white">
      {/* Left Side - Logo and Copyright */}
      <div className="flex items-center gap-4">
        <Image
          className="w-24 h-30 md:block"
          src={assets.logo}
          alt="logo"
        />
        <p className="text-s md:text-sm text-center md:text-left text-gray-500">
          Copyright 2025 © urbancart.com All Rights Reserved.
        </p>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <a href="#">
          <Image src={assets.facebook_icon} alt="facebook_icon" className="w-5 h-5" />
        </a>
        <a href="#">
          <Image src={assets.twitter_icon} alt="twitter_icon" className="w-5 h-5" />
        </a>
        <a href="#">
          <Image src={assets.instagram_icon} alt="instagram_icon" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};


export default Footer;