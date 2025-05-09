import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";
import GetStarted from "./GetStarted";

const HowItWorks = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });

	return (
		<section className="relative">
			<div
				className={cn("how-it-works", {
					"how-it-works-animation": !isVisible,
				})}
			>
				<div className="container">
					<div className="text-center">
						<h2 className="h2">How does it work?</h2>
						<svg
							width="230"
							height="19"
							viewBox="0 0 230 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="md:-translate-x-20 xl:-translate-x-[190px]"
						>
							<path
								d="M6 13C80.2919 0.0131964 151.712 9.07576 224 9.07606"
								stroke="#9379EC"
								strokeWidth="12"
								strokeLinecap="round"
							/>
						</svg>
					</div>
					<div className="pt-[128px] pb-[112px] max-md:py-12" ref={ref}>
						<Swiper
							className="slides-per-view-auto overflow-visible"
							spaceBetween={16}
							slidesPerView="auto"
							breakpoints={{
								0: {
									slidesPerView: "auto",
								},
								992: {
									slidesPerView: "3",
									spaceBetween: 40,
								},
							}}
						>
							{data.map((item, index) => (
								<SwiperSlide key={index} className="h-auto">
									<HowItWorksCard {...item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="text-center relative z-10">
						<GetStarted />
					</div>
				</div>
			</div>
		</section>
	);
};
const HowItWorksCard = ({
	img,
	title,
	text,
	textClassName,
	titleClassName,
}) => {
	return (
		<>
			<div
				className="how-it-works-card"
				style={{
					background: `url(${img}) no-repeat top center / cover`,
				}}
			>
				<div className="text-white">
					<h5 className={`title ${titleClassName}`}>{title}</h5>
					<p className={`text ${textClassName}`}>{text}</p>
				</div>
			</div>
		</>
	);
};
const data = [
	{
		title: "Step 1",
		img: "/img/how-it-works/1.png",
		text: "Click get started to start the onboarding",
		textClassName: "",
	},
	{
		title: "Step 2",
		img: "/img/how-it-works/2.png",
		text: "Fill in information about your personality and lifestyle",
		titleClassName: "text-dark-blue",
		textClassName: "text-dark-blue",
	},
	{
		title: "Step 3",
		img: "/img/how-it-works/3.png",
		text: "Swipe and match with ideal flatmates ",
		titleClassName: "text-purple",
		textClassName: "text-dark-blue",
	},
	{
		title: "Step 4",
		img: "/img/how-it-works/4.png",
		text: "Create loby's and plan your move in toghether",
		textClassName: "",
	},
];

export default HowItWorks;
