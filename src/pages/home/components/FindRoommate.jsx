import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";
const FindRoommate = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<section
			className={cn("find-roommate", {
				"find-roommate-animation": !isVisible,
			})}
		>
			<div className="container">
				<h2 className="h2 md:text-center md:max-w-[857px] md:mx-auto md:mb-16">
					Find your roommie <br className="sm:hidden" /> in{" "}
					<br className="hidden md:block" /> just a few days with{" "}
					<br className="sm:hidden" /> our AI!
				</h2>
				<svg
					width="179"
					height="13"
					viewBox="0 0 179 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="md:hidden mb-10"
				>
					<path
						d="M2.99999 9.4414C13.8166 8.95814 24.6426 7.55903 35.4433 6.66659C77.6116 3.1823 133.927 2.43679 176.136 3.78932"
						stroke="#9379EC"
						strokeWidth="5.55575"
						strokeLinecap="round"
					/>
				</svg>

				<div className="max-w-[1307px]" ref={ref}>
					<Swiper
						className="slides-per-view-auto overflow-visible"
						spaceBetween={24}
						slidesPerView="auto"
						breakpoints={{
							0: {
								slidesPerView: "auto",
							},
							1200: {
								slidesPerView: "3",
								spaceBetween: 48,
							},
						}}
					>
						{data.map((item, index) => (
							<SwiperSlide key={index} className="h-auto group">
								<FindRoommateCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="text-center mt-12">
					<a
						href="https://apps.apple.com/gb/app/loby/id6737482486"
						target="_blank"
						className="inline-block max-w-[188px] mx-auto max-sm:max-w-[168px]"
					>
						<img src="/img/app-store.svg" className="max-w-full" alt="" />
					</a>
				</div>
			</div>
			<div className="img-shadow-fix hidden" />
		</section>
	);
};
const FindRoommateCard = ({ title, img, imgClass }) => {
	return (
		<div className="find-roommate-card group-even:bg-[#FDC1D5]">
			<h4
				className="h4 sm:text-[21.56px] mb-5 sm:mb-12 max-sm:text-[20px] max-sm:leading-[1.3]"
				dangerouslySetInnerHTML={{
					__html: title,
				}}
			></h4>
			<img
				src={img}
				alt=""
				className={`max-w-full ${imgClass} mt-auto select-none`}
			/>
		</div>
	);
};
const data = [
	{
		title: "Find roommates who <span class='text-purple xl:block'>match your personality</span> ",
		img: "/img/find-roommate/1.svg",
		imgClass: "img-shadow-fix",
	},
	{
		title: "<span class='text-white'>Sublease with us</span> and earn extra cash this summer",
		img: "/img/find-roommate/2.svg",
		imgClass: "",
	},
	{
		title: "<span class='text-purple'>Create rooms </span> and get apartment recommendations",
		img: "/img/find-roommate/3.svg",
		imgClass: "",
	},
];
export default FindRoommate;
