import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

const Partners = () => {
  const [isVisible, ref] = useInViewport({ threshold: 0.3 });

  return (
    <section className={cn("partner-section")} ref={ref}>
      <div
        className="container relative duration-1000 transition-all"
        style={{
          transform: !isVisible ? "translateY(-150px)" : "",
        }}
      >
        <h2 className="h2 text-center xl:text-[40px] xl:leading-[48px] xl:tracking-[-1px] mb-12 xl:mb-16">
          Our partners and universities
        </h2>
        <div className="max-w-[1043px] mx-auto">
          <Marquee autoFill={true} pauseOnHover={true}>
            {data.map((item, index) => (
              <img
                src={item.img}
                key={index}
                className="max-h-[86px] md:mx-7 mx-3 w-[unset] h-[unset] max-md:max-h-[40px] max-w-[120px]"
                alt=""
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
const data = [
  {
    // img: "/img/partner/1.svg",
    img: "/img/partner/partner1.png",
  },
  {
    // img: "/img/partner/5.svg",
    img: "/img/partner/partner5.png",
  },
  // {
  // 	// img: "/img/partner/2.svg",
  // 	img: "/img/partner/partner2.png",
  // },
  {
    // img: "/img/partner/4.svg",
    img: "/img/partner/partner4.png",
  },
  {
    // img: "/img/partner/3.svg",
    img: "/img/partner/partner3.png",
  },
];
export default Partners;
