import React from "react";
import { socialIcons } from "./icons";
import useInViewport from "./useInViewport";
import { Link } from "react-router-dom";
const Footer = ({ lobyLogo }) => {
  const [isVisible2, ref2] = useInViewport({ threshold: 0.3 });
  return (
    <>
      <div className="container max-w-[1246px] text-[#9379EC]" ref={ref2}>
        <img
          src={lobyLogo ?? "/img/lobyBigLogo.svg"}
          alt=""
          className="duration-1000 transition-all w-full"
          style={{
            transform: !isVisible2 ? "translateY(100%)" : "",
          }}
        />
      </div>
      <footer className="bg-white relative">
        <div className="pb-[70px] md:pb-[126px] pt-[70px] md:pt-[106px]">
          <div className="container">
            <div className="flex flex-wrap justify-between gap-y-8">
              <div className="flex flex-col gap-2 footer-links">
                <img src="/img/logo.svg" className="mb-2" width={150} alt="" />
                <Link className="link " to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="link" to="/terms-and-conditions">
                  Term and Conditions
                </Link>
              </div>

              <div className="w-full max-w-[616px] flex flex-wrap justify-between gap-x-7 gap-y-12 footer-links">
                <div className="item">
                  <Link className="link" to="">
                    Reviews
                  </Link>
                  <Link className="link" to="">
                    Find roommate
                  </Link>
                  <Link className="link" to="">
                    How it works
                  </Link>
                  <Link className="link" to="/delete-account">
                    Delete account
                  </Link>
                </div>
                <div className="item">
                  <Link className="link" to="">
                    Our partners
                  </Link>
                  <Link className="link" to="">
                    Our story
                  </Link>
                </div>
                <div className="max-sm:w-full">
                  <h6 className="subtitle">Follow us:</h6>
                  <div className="flex gap-2">
                    <Link to="" className="flex">
                      {socialIcons.linkedin}
                    </Link>
                    <Link to="" className="flex">
                      {socialIcons.instagram}
                    </Link>
                    <Link to="" className="flex">
                      {socialIcons.discord}
                    </Link>
                    <Link to="" className="flex">
                      {socialIcons.facebook}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#2E3C43] text-sm mt-10 xl:mt-20">
              All rights reserved loby
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
