import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";
import { slidericons } from "./icons";

export default function BestValueApartment() {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	const sliderRef = useRef();
	const [progress, setProgress] = useState(0);

	return (
		<section
			className="py-[100px] xl:pt-[210px] xl:pb-[125px] max-xl:pb-0"
			id="apartments"
		>
			<div className="container">
				<h2
					className={cn(
						"h2 text-center mb-12 xl:mb-16 mx-auto max-w-[600px] lg:text-[48px] lg:leading-[1.2] duration-500 transition-all",
						{
							"-translate-y-20": !isVisible,
						}
					)}
				>
					Browse through the best value apartments
				</h2>
				<div
					className={cn(
						"relative scale-75 duration-1000 transition-all max-lg:max-w-[360px] max-sm:max-w-[253px] mx-auto",
						{
							"scale-100": isVisible,
						}
					)}
					ref={ref}
				>
					<Swiper
						className="overflow-visible match-with-others-slider lg:pointer-events-none"
						spaceBetween={16}
						breakpoints={{
							0: {
								slidesPerView: "1",
							},
							992: {
								slidesPerView: "3",
								spaceBetween: 40,
							},
						}}
						centeredSlides={true}
						initialSlide={1}
						ref={sliderRef}
						onSwiper={(swiper) => {
							setProgress(swiper.realIndex);
						}}
						onSlideChange={(swiper) => {
							setProgress(swiper.realIndex);
						}}
						loop={true}
					>
						{[...Array(Math.max(4, data.length))].map((_, index) => {
							const item = data[index % data.length];
							return (
								<SwiperSlide key={index} className="h-auto group">
									<ExploreBestFitCard index={index} {...item} />
								</SwiperSlide>
							);
						})}
					</Swiper>
					<div className="flex justify-center mx-auto max-w-[848px] items-center gap-5">
						<button
							className="h-10 w-[120px] bg-white flex items-center gap-2 justify-center font-medium rounded-full"
							type="button"
							onClick={() => sliderRef.current.swiper.slidePrev()}
						>
							{slidericons.arrowLeft} Back
						</button>
						<div className="progress flex-grow bg-[#CDCDCE] overflow-hidden">
							<div
								className="progress-bar bg-dark-blue h-1 rounded-full transition-all duration-500"
								style={{
									width: `${(progress / (data.length - 1)) * 100}%`,
								}}
							></div>
						</div>
						<button
							className="h-10 w-[120px] bg-white flex items-center gap-2 justify-center font-medium rounded-full"
							type="button"
							onClick={() => sliderRef.current.swiper.slideNext()}
						>
							Next {slidericons.arrowRight}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

const ExploreBestFitCard = ({ img, name, location, budget, moveIn, index }) => {
	return (
		<>
			<div className="how-it-works-card shadow-none h-auto p-0 bg-transparent relative mx-auto max-w-[416px] scale-75 group-[.swiper-slide-active]:scale-100 duration-300 sm:group-[.swiper-slide-next]:translate-x-[50px] sm:group-[.swiper-slide-prev]:translate-x-[-50px]">
				<img
					src={img}
					className="w-full rounded-[20px] aspect-[416/353] object-cover min-h-[214px]"
					alt=""
				/>
				<div className="bg-white p-3 sm:p-5 card-content-shadow rounded-2xl scale-0 opacity-0 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:opacity-100 translate-y-[calc(-100%-14px)] translate-x-[calc(50%-0px)] sm:translate-x-[calc(50%+50px)] max-w-[183px] sm:w-[300px] sm:max-w-[300px] duration-1000 delay-300 transition-all">
					<h5
						className={
							"text-[11px] sm:text-[20px] leading-[1.2] font-semibold"
						}
					>
						<span className="flex">
							<span className="w-0 flex-grow">{name}</span>
							<span className="text-[#70D169] font-normal text-[11px] sm:text-[13px] inline-flex items-center gap-1">
								<span className="bg-current w-2 h-2 rounded-full"></span>
								Live
							</span>{" "}
						</span>
						<span className="text-[#B0B0B1] sm:text-[17px]">
							{location}
						</span>
					</h5>
					<div className="flex flex-wrap font-medium text-sm justify-between mt-4 max-sm:text-[7px]">
						<span className="inline-flex items-center gap-1">
							<span className="max-sm:w-[10px]">{icons.people}</span> 4
							ppl
						</span>
						<span className="inline-flex items-center gap-1">
							<span className="max-sm:w-[10px]">{icons.bath}</span> 2
							baths
						</span>
						<span className="inline-flex items-center gap-1">
							<span className="max-sm:w-[10px]">{icons.bills}</span>{" "}
							bills included
						</span>
					</div>
				</div>
				<div className="bg-[#F7F7F8] px-3 sm:px-4 pb-2 pt-1 sm:pb-3 sm:pt-2 rounded-xl w-[92px] sm:w-[152px] absolute top-6 sm:top-14 -left-14 sm:-left-24 card-content-shadow scale-0 opacity-0 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:opacity-100 duration-500 delay-300">
					<span className="text-[7px] sm:text-xs font-medium text-[#B0B0B1] mb-2 m-0">
						Price
					</span>
					<h3 className="text-[15px] sm:text-[20px] lg:text-[24px] font-semibold leading-[1]">
						{budget}
					</h3>
				</div>
				<div className="bg-[#F7F7F8] px-3 sm:px-4 pb-2 pt-1 sm:pb-3 sm:pt-2 rounded-xl w-[92px] sm:w-[152px] absolute top-20 sm:top-[140px] -left-10 sm:-left-14 card-content-shadow scale-0 opacity-0 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:opacity-100 duration-500 delay-300">
					<span className="text-[7px] sm:text-xs font-medium text-[#B0B0B1] mb-2 m-0">
						Move in
					</span>
					<h3 className="text-[15px] sm:text-[20px] lg:text-[24px] font-semibold leading-[1] text-[#F28FBD]">
						{moveIn}
					</h3>
				</div>
			</div>
		</>
	);
};
const data = [
	{
		name: "Ash Dr. San Jose,",
		img: "/img/apartment/1.png",
		location: "London",
		budget: "£1200 ",
		moveIn: "2 Feb",
	},
	{
		name: "Ash Dr. San Jose,",
		img: "/img/apartment/2.png",
		location: "London",
		budget: "£1200 ",
		moveIn: "2 Feb",
	},
	{
		name: "Ash Dr. San Jose,",
		img: "/img/apartment/3.png",
		location: "London",
		budget: "£1200 ",
		moveIn: "2 Feb",
	},
	{
		name: "Ash Dr. San Jose,",
		img: "/img/apartment/1.png",
		location: "London",
		budget: "£1200 ",
		moveIn: "2 Feb",
	},
	{
		name: "Ash Dr. San Jose,",
		img: "/img/apartment/2.png",
		location: "London",
		budget: "£1200 ",
		moveIn: "2 Feb",
	},
	{
		name: "Ash Dr. San Jose,",
		img: "/img/apartment/3.png",
		location: "London",
		budget: "£1200 ",
		moveIn: "2 Feb",
	},
];

const icons = {
	people: (
		<svg
			width="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ maxWidth: "100%" }}
		>
			<path
				d="M2.14844 13.1402V8.09386C2.14844 7.75927 2.27832 7.43838 2.50951 7.20179C2.7407 6.96519 3.05425 6.83228 3.38121 6.83228H12.0106C12.3375 6.83228 12.6511 6.96519 12.8823 7.20179C13.1135 7.43838 13.2433 7.75927 13.2433 8.09386V13.1402"
				stroke="#2D3849"
				stroke-width="1.26158"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3.38086 6.83236V4.30919C3.38086 3.9746 3.51074 3.65371 3.74193 3.41712C3.97312 3.18052 4.28668 3.04761 4.61363 3.04761H10.7775C11.1044 3.04761 11.418 3.18052 11.6492 3.41712C11.8804 3.65371 12.0102 3.9746 12.0102 4.30919V6.83236"
				stroke="#2D3849"
				stroke-width="1.26158"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M2.14844 11.8787H13.2433"
				stroke="#2D3849"
				stroke-width="1.26158"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	),
	bath: (
		<svg
			width="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ maxWidth: "100%" }}
		>
			<path
				d="M10.9102 1.90161C11.1668 1.90161 11.4135 2.00622 11.5947 2.19165L11.6582 2.26392C11.7991 2.4398 11.877 2.6608 11.877 2.88989V6.63208H12.7598C12.8936 6.63213 13.0218 6.68697 13.1162 6.78345L13.1797 6.86255C13.2343 6.94647 13.2637 7.04562 13.2637 7.14771L13.251 7.53833C13.1983 8.31773 12.9893 9.07766 12.6387 9.77173L12.4521 10.1135C11.9268 10.9992 11.1755 11.7208 10.2803 12.2043L10.4805 13.6311L10.4893 13.7366C10.4929 13.8422 10.4805 13.9482 10.4512 14.05C10.4219 14.1517 10.3763 14.2475 10.3174 14.3342L10.2539 14.4182C10.1859 14.4984 10.1056 14.5664 10.0166 14.6204L9.9248 14.6702C9.83037 14.7142 9.72974 14.7419 9.62695 14.7532L9.52344 14.759H5.8252C5.72135 14.759 5.6186 14.7416 5.52051 14.7083L5.42383 14.6702C5.32938 14.6261 5.24265 14.5663 5.16699 14.4944L5.09473 14.4182C5.02674 14.338 4.97221 14.2472 4.93262 14.1497L4.89746 14.05C4.85841 13.9144 4.84864 13.7711 4.86816 13.6311L5.06738 12.2043C4.28547 11.7818 3.6138 11.1774 3.10645 10.4407L2.89648 10.1135C2.36615 9.21938 2.08573 8.19353 2.08496 7.14771L2.09473 7.04712C2.11401 6.94817 2.16151 6.85601 2.23242 6.78345L2.30859 6.71899C2.39079 6.66285 2.48837 6.63216 2.58887 6.63208H3.47168V2.88989C3.47168 2.6281 3.57372 2.37705 3.75488 2.19165L3.8252 2.12524C3.99716 1.98108 4.21391 1.90161 4.43848 1.90161H10.9102ZM9.31836 12.6125C8.24646 12.9496 7.10115 12.9498 6.0293 12.6125L5.87402 13.7288H9.47461L9.31836 12.6125ZM3.12207 7.66235C3.24488 8.80178 3.7704 9.85674 4.60156 10.6262L4.7627 10.7678C5.58115 11.4577 6.61041 11.8372 7.6748 11.8372C8.80994 11.8371 9.90495 11.4057 10.7471 10.6262L10.9014 10.4758C11.6433 9.72205 12.1115 8.72954 12.2266 7.66235H3.12207ZM4.48047 6.63208H10.8682V2.93188H4.48047V6.63208ZM6.75 3.79419C6.88402 3.79424 7.01198 3.84888 7.10645 3.94556L7.16992 4.02368C7.22455 4.10758 7.25386 4.20674 7.25391 4.30884C7.25391 4.41116 7.22474 4.51093 7.16992 4.59497L7.10645 4.6731C7.012 4.76963 6.88391 4.82442 6.75 4.82446H5.8252C5.72464 4.82445 5.62718 4.79369 5.54492 4.73755L5.46875 4.6731C5.37428 4.57642 5.32129 4.44515 5.32129 4.30884C5.32135 4.17261 5.37433 4.04218 5.46875 3.94556L5.54492 3.8811C5.62723 3.82486 5.72454 3.7942 5.8252 3.79419H6.75Z"
				fill="#2D3849"
				stroke="#2D3849"
				stroke-width="0.0841056"
			/>
		</svg>
	),
	bills: (
		<svg
			width="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ maxWidth: "100%" }}
		>
			<g clip-path="url(#clip0_16001_11494)">
				<path
					d="M4.87891 10.4593V1.9436L5.80348 2.4167L6.72806 1.9436L7.65078 2.4167L8.58646 1.9436L9.50179 2.4167L10.4202 1.9436L11.3429 2.4167L12.2755 1.9436L13.2001 2.4167L14.1247 1.9436V8.56692"
					stroke="#2D3849"
					stroke-width="1.26158"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M14.1238 8.56689V11.8786C14.1238 12.5059 13.8802 13.1076 13.4468 13.5512C13.0133 13.9948 12.4254 14.244 11.8123 14.244M11.8123 14.244C11.1993 14.244 10.6114 13.9948 10.1779 13.5512C9.74442 13.1076 9.50089 12.5059 9.50089 11.8786V10.4593H1.642C1.58113 10.4587 1.52075 10.4705 1.46441 10.4941C1.40806 10.5176 1.35687 10.5525 1.31382 10.5965C1.27078 10.6406 1.23675 10.693 1.21372 10.7506C1.1907 10.8083 1.17913 10.8701 1.17971 10.9324C1.17971 12.8247 1.37449 14.244 3.49115 14.244H11.8123Z"
					stroke="#2D3849"
					stroke-width="1.26158"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6.72852 4.78223H12.276"
					stroke="#2D3849"
					stroke-width="1.26158"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8.57617 7.14771H12.2745"
					stroke="#2D3849"
					stroke-width="1.26158"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_16001_11494">
					<rect
						width="14.7932"
						height="15.139"
						fill="white"
						transform="translate(0.255859 0.524414)"
					/>
				</clipPath>
			</defs>
		</svg>
	),
};
