import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";
import GetStarted from "../../home/components/GetStarted";

const UniversityFlatmate = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<section className="relative">
			<div
				className={cn("roommate-section bg-[#FFF3F3] overflow-hidden", {
					"anime-2": !isVisible,
				})}
				style={{
					WebkitMask: `url(/img/roommate-section.png) no-repeat center center / 110% 100%`,
				}}
			>
				<div className="container xl:max-w-[1200px]">
					<h2 className="h2 max-w-[1123px] mx-auto text-center mb-12">
						Fill out the onbaording, <br className="md:block hidden" />{" "}
						swipe & match{" "}
						<span className="relative">
							with likeminded
							<svg
								width="484"
								viewBox="0 0 484 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-theme2 absolute left-0 top-[calc(100%-16px)]"
							>
								<path
									d="M6.34487 17.922C35.7673 17.021 65.2031 14.1417 94.5767 12.3566C209.258 5.38701 362.467 4.5208 477.324 8.00037"
									stroke="currentColor"
									strokeWidth="12"
									strokeLinecap="round"
								/>
							</svg>
						</span>{" "}
						flatmates from your university
					</h2>
					<Swiper
						className="slides-per-view-auto"
						spaceBetween={24}
						slidesPerView="auto"
						breakpoints={{
							0: {
								slidesPerView: "auto",
							},
							1200: {
								spaceBetween: 36,
								slidesPerView: "3",
							},
						}}
						ref={ref}
					>
						{data.map((item, index) => (
							<SwiperSlide key={index} className="h-auto">
								<StepCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="text-center absolute bottom-10 sm:bottom-16 lg:bottom-[130px] left-0 w-full z-[10]">
					<GetStarted />
				</div>
			</div>
		</section>
	);
};
const StepCard = ({ img }) => {
	return (
		<div className="step-card">
			<img src={img} className="rounded-[20px] w-full" alt="" />
		</div>
	);
};
const data = [
	{
		img: "/img/kcl/step1.png",
	},
	{
		img: "/img/kcl/step2.png",
	},
	{
		img: "/img/kcl/step3.png",
	},
	{
		img: "/img/kcl/step4.png",
	},
];
export default UniversityFlatmate;
