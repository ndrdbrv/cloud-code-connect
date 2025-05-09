import React from "react";
import { socialIcons } from "../../components/icons";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-0">
      <div className="w-full max-w-6xl p-12 rounded-[48px] border-8 border-purple-light bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Thanks for Signing Up!
          </h1>

          {/* Message */}
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
            We'll connect you with flatmates who vibe with your style and help
            you find awesome new places to live. Stay tuned—our team will reach
            out soon!
          </p>

          {/* Social Links */}
          <div className="max-sm:w-full">
            <h6 className="subtitle text-xl  mb-5">-Follow us-</h6>
            <div className="flex gap-2 text-center justify-center">
              <a href="" className="flex">
                {socialIcons.linkedin}
              </a>
              <a href="" className="flex">
                {socialIcons.instagram}
              </a>
              <a href="" className="flex">
                {socialIcons.discord}
              </a>
              <a href="" className="flex">
                {socialIcons.facebook}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
