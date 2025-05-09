import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../components/cn";
import { icons } from "../../../components/icons";
import useInViewport from "../../../components/useInViewport";
import GetStarted from "./GetStarted";

const RoommateSection = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<section className="relative">
			<div
				className={cn("roommate-section bg-purple-light overflow-hidden", {
					"anime-2": !isVisible,
				})}
				style={{
					WebkitMask: `url(/img/roommate-section.png) no-repeat center center / 110% 100%`,
				}}
			>
				<div className="container">
					<h2 className="h2 max-w-[689px]">
						Getting a roommate saves 30% cost on rent
					</h2>
					<svg
						width="154"
						height="25"
						viewBox="0 0 154 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mb-14"
					>
						<path
							d="M6 18.3672C14.8709 17.4594 23.7457 14.5584 32.6019 12.7598C67.1783 5.73768 113.371 4.86494 148 8.37074"
							stroke="#FCFCFC"
							stroke-width="12"
							stroke-linecap="round"
						/>
					</svg>

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
								<ReviewCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className="text-center absolute bottom-10 sm:bottom-16 lg:bottom-[130px] left-0 w-full z-[10]">
				<GetStarted />
			</div>
		</section>
	);
};
const ReviewCard = ({ title, name, img, text }) => {
	return (
		<>
			<div className="review-card">
				<div className="flex sm:gap-2 mb-[15px]">
					{icons.star}
					{icons.star}
					{icons.star}
					{icons.star}
					{icons.star}
				</div>
				<h4 className="h4 mb-[15px] max-w-[290px] max-md:text-[18.4px] max-md:leading-6">
					{title}
				</h4>
				<div className="text-dark-blue text-opacity-80 mb-5 max-md:text-[10.51px] max-md:leading-[14px]">
					{text}
				</div>
				<div className="flex items-center gap-[14px] mt-auto max-md:text-[10.51px] max-md:leading-[14px]">
					<img
						src={img}
						className="aspect-square rounded-full w-[56px] object-cover max-md:w-9"
						alt=""
					/>
					<h6 className="text-dark-blue text-opacity-80">{name}</h6>
				</div>
			</div>
		</>
	);
};
const data = [
	{
		title: "Much better option than Spareroom",
		text: "More flexible for professionals who are here potentially less than a year.",
		name: "Savannah",
		img: "/img/reviews/1.png",
	},
	{
		title: "It was a great experience!",
		text: "There are so many categories I can choose to help me match the most compatible roommates. 💗And I rly like the interface of room, which makes me feel energetic and comfortable. Btw it would be better to let me preview all of my choice before or after submission.",
		name: "Emanuella",
		img: "/img/reviews/2.png",
	},
	{
		title: "It gave me lots of new options",
		text: "The personalized categories allowed me to find someone compatible with my lifestyle and preferences. The platform's interface is visually appealing and easy to navigate.",
		name: "Owen",
		img: "/img/reviews/3.png",
	},
];
export default RoommateSection;
