import React from "react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

export default function Connecting() {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<section
			className="pt-[151px] pb-[112px] md:pt-[322px] md:pb-[266px] bg-[#D4C9F8] overflow-hidden"
			ref={ref}
		>
			<div className="container relative md:min-h-[650px]">
				{data.map((item, index) => (
					<ReviewCard {...item} key={index} index={index} />
				))}
				<span
					className={cn(
						"block text-[17vw] sm:text-[75px] max-md:break-all md:text-[90px] lg:text-[120px] leading-[1] xl:text-[160px] text-[#2C113F] xl:leading-[0.81] tracking-tight font-bold text-center uppercase transition-all duration-1000 delay-200",
						{
							"scale-50 translate-y-1/2": !isVisible,
						}
					)}
				>
					Connecting you with people from your university
				</span>
			</div>
		</section>
	);
}
const ReviewCard = ({ info, name, img, text, index }) => {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<>
			<div
				className={cn(
					"review-card p-4 sm:p-8 md:w-[358px] absolute h-auto z-10 duration-1000 delay-200 transition-all",
					{
						"-top-10 left-1/2 xl:left-[calc(50%+255px)] md:top-[-136px] rotate-[10deg]":
							index == 0,
						"right-1/2 xl:right-[calc(50%+295px)] top-[176px] rotate-[-6deg]":
							index == 1,
						"left-1/2 xl:left-[calc(50%+385px)] top-[500px] rotate-[10deg]":
							index == 2,
						"right-1/2 xl:right-[calc(50%+170px)] top-[585px] rotate-[-6deg]":
							index == 3,
						"scale-50 !rotate-0": !isVisible,
					}
				)}
				ref={ref}
			>
				<div className="text-title font-medium mb-5 max-md:text-[10.51px] max-md:leading-[14px]">
					{text}
				</div>
				<div className="flex items-center gap-[14px] mt-auto max-md:text-[10.51px] max-md:leading-[14px]">
					<img
						src={img}
						className="aspect-square rounded-full w-12 object-cover max-md:w-9"
						alt=""
					/>
					<div className="w-0 flex-grow">
						<h6 className="text-dark-blue">{name}</h6>
						<span className="text-[#B0B0B1]">{info}</span>
					</div>
				</div>
			</div>
		</>
	);
};

const data = [
	{
		text: "There are so many categories I can choose to help me match the most compatible roommates. 💗And I rly like the interface of room, which makes me feel energetic.",
		name: "Savannah",
		info: "Kings University",
		img: "/img/reviews/1.png",
	},
	{
		text: "There are so many categories I can choose to help me match the most compatible roommates. 💗And I rly like the interface of room, which makes me feel energetic.",
		name: "Emanuella",
		info: "Kings University",
		img: "/img/reviews/2.png",
	},
	{
		text: "There are so many categories I can choose to help me match the most compatible roommates. 💗And I rly like the interface of room, which makes me feel energetic.",
		name: "Owen",
		info: "Kings University",
		img: "/img/reviews/3.png",
	},
	{
		text: "There are so many categories I can choose to help me match the most compatible roommates. 💗And I rly like the interface of room, which makes me feel energetic.",
		name: "Owen",
		info: "Kings University",
		img: "/img/reviews/3.png",
	},
];
