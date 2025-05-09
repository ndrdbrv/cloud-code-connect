import React, { useState } from "react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";
import { slidericons } from "./icons";
export default function MatchWithOthers() {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	const [currentIndex, setCurrentIndex] = useState(3);
	const [loading, setLoading] = useState(false);

	return (
		<section className="py-[100px] xl:pt-[210px] xl:pb-[125px] max-xl:pb-0 overflow-hidden">
			<div className="container">
				<h2
					className={cn(
						"h2 text-center mb-12 xl:mb-12 mx-auto max-w-[700px] lg:text-[48px] lg:leading-[1.2] duration-500 transition-all",
						{
							"-translate-y-20": !isVisible,
						}
					)}
				>
					Match with others looking for the same apartment
				</h2>
				<div
					className={cn(
						"relative scale-75 duration-500 transition-all max-w-[377px] max-lg:max-w-[300px] max-sm:max-w-[223px] mx-auto",
						{
							"scale-100": isVisible,
						}
					)}
					ref={ref}
				>
					<div className="match-with-others-slider-2 h-[440px] md:h-[540px] lg:h-[600px]">
						{data.map((item, index) => (
							<ExploreBestFitCard
								key={index}
								index={index}
								{...item}
								currentIndex={currentIndex}
							/>
						))}
					</div>
					<div className="flex justify-center gap-2">
						<button
							className="h-10 w-[120px] bg-white flex items-center gap-2 justify-center font-medium rounded-full"
							type="button"
							onClick={() => {
								if (currentIndex > 0 && !loading) {
									setCurrentIndex(currentIndex - 1);
									setLoading(true);
									const timer = setTimeout(() => {
										setLoading(false);
									}, 500);
									return () => clearTimeout(timer);
								}
							}}
						>
							{slidericons.arrowLeft} Back
						</button>
						<button
							className="h-10 w-[120px] bg-white flex items-center gap-2 justify-center font-medium rounded-full"
							type="button"
							onClick={() => {
								if (currentIndex < data.length - 1 && !loading) {
									setCurrentIndex(currentIndex + 1);
									setLoading(true);
									const timer = setTimeout(() => {
										setLoading(false);
									}, 500);
									return () => clearTimeout(timer);
								}
							}}
						>
							Next {slidericons.arrowRight}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

const ExploreBestFitCard = ({
	img,
	name,
	age,
	budget,
	moveIn,
	index,
	currentIndex,
}) => {
	return (
		<>
			<div
				className={cn(
					"how-it-works-card shadow-none h-auto p-0 bg-transparent relative w-full !duration-1000 transition-all group !delay-0 ",
					currentIndex === index
						? "active"
						: currentIndex === index - 1
						? "next"
						: currentIndex === index - 2
						? "next-next"
						: currentIndex === index + 1
						? "prev"
						: currentIndex === index + 2
						? "prev-prev"
						: currentIndex > index
						? "far-next"
						: "far-prev"
				)}
			>
				<img
					src={img}
					className="w-full rounded-[20px] aspect-[377/440] object-cover"
					alt=""
				/>
				<div className="bg-white p-3 card-content-shadow rounded-2xl scale-0 opacity-0 group-[.active]:scale-100 group-[.active]:opacity-100 rotate-[-5.16deg] translate-y-[-80px] sm:translate-y-[-100px] translate-x-[calc(50%-0px)] max-w-[182px] sm:max-w-[291px] duration-500  transition-all">
					<h5 className={"text-[11px] sm:text-[20px] font-semibold"}>
						{name} <span className="text-[#B0B0B1]">{age}</span>
						{verifiedBadge}
					</h5>
					<div className="flex gap-2 mt-2 sm:mt-3">
						<div className="bg-[#F7F7F8] px-1 sm:px-3 py-2 pb-[10px] rounded-lg flex-grow max-sm:pt-1">
							<span className="text-[7px] sm:text-[10px] font-medium text-[#727780] mb-2 m-0">
								Budget
							</span>
							<h3 className="text-[11px] sm:text-[20px] font-semibold leading-[1]">
								{budget}
							</h3>
						</div>
						<div className="bg-[#F7F7F8] px-1 sm:px-3 py-2 pb-[10px] rounded-lg max-sm:pt-1">
							<span className="text-[7px] sm:text-[10px] font-medium text-[#727780] mb-2 m-0">
								Move in
							</span>
							<h3 className="text-[11px] sm:text-[20px] font-semibold leading-[1]">
								{moveIn}
							</h3>
						</div>
					</div>
				</div>
				<div className="w-[108px] py-4 scale-0 opacity-0 group-[.active]:scale-75 sm:group-[.active]:scale-100 group-[.active]:opacity-100 duration-500  transition-all absolute top-12 xl:top-[75px] left-[-50px] z-10  bg-[#9379EC] rounded-[20px]">
					<div className="flex flex-col gap-3 text-center items-center">
						<span className="block w-8">{nightOwlBadge}</span>
						<span className="text-[#F7F7F8] font-medium text-sm">
							Night Owl
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
const data = [
	{
		name: "Adrian",
		// img: "/img/explore/1.png",
		img: "/img/explore/1.jpg",
		age: "25",
		budget: "£700-1300",
		moveIn: "2 Feb",
	},
	{
		name: "Chris",
		// img: "/img/explore/2.png",
		img: "/img/explore/2.jpg",
		age: "21",
		budget: "£700-1300",
		moveIn: "10 APR",
	},
	{
		name: "Francesco",
		img: "/img/explore/3.png",
		age: "26",
		budget: "£1000-2200",
		moveIn: "20 JAN",
	},
	{
		name: "David",
		img: "/img/explore/4.png",
		age: "25",
		budget: "£700-900",
		moveIn: "ASAP",
	},
	{
		name: "Alexander",
		img: "/img/explore/5.png",
		age: "25",
		budget: "£1300-2000",
		moveIn: "9 SEP",
	},
	{
		name: "Greeta",
		img: "/img/explore/6.png",
		age: "22",
		budget: "£900-1300",
		moveIn: "23 AUG",
	},
];
const nightOwlBadge = (
	<svg
		width="33"
		viewBox="0 0 33 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M20.7051 20.8545C20.7051 25.6449 22.8825 29.9998 26.3664 29.9998"
			stroke="white"
			stroke-width="1.74196"
		/>
		<path
			d="M26.3665 11.7477C26.3665 17.4991 21.8821 22.1615 16.3502 22.1615C10.8184 22.1615 6.33398 17.4991 6.33398 11.7477C6.33398 5.99623 10.8184 3 16.3502 3C21.8821 3 26.3665 5.99623 26.3665 11.7477Z"
			stroke="white"
			stroke-width="1.74196"
		/>
		<path
			d="M16.3506 13.9014C16.3506 13.9014 16.7861 4.74448 8.94727 5.61614"
			stroke="white"
			stroke-width="1.74196"
			stroke-linecap="round"
		/>
		<path
			d="M16.3506 13.9014C16.3506 13.9014 15.9151 4.74448 23.7539 5.61614"
			stroke="white"
			stroke-width="1.74196"
			stroke-linecap="round"
		/>
		<path
			d="M6.33398 11.2759C6.33358 28.26 17.2212 30.0019 26.3665 30.0019V11.2759"
			stroke="white"
			stroke-width="1.74196"
		/>
		<path
			d="M11.334 11H11.3473"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M21.334 11H21.3473"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const verifiedBadge = (
	<svg
		width="17"
		viewBox="0 0 23 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="translate-y-[-2px] ml-2"
	>
		<path
			d="M21.258 9.73907C20.8748 9.34614 20.4808 8.93169 20.3301 8.57859C20.1783 8.2255 20.188 7.70123 20.1783 7.16621C20.1675 6.18658 20.1482 5.06701 19.3709 4.28977C18.5937 3.51252 17.4741 3.49315 16.4945 3.48238C15.9594 3.47162 15.4147 3.46193 15.0821 3.33167C14.7484 3.19926 14.3145 2.78588 13.9205 2.40264C13.2251 1.73628 12.4285 0.979492 11.3778 0.979492C10.3282 0.979492 9.53051 1.73628 8.83401 2.40264C8.44108 2.78588 8.02663 3.17988 7.67353 3.33059C7.32044 3.48238 6.79617 3.47269 6.26115 3.48238C5.28152 3.49315 4.16195 3.51252 3.38471 4.28977C2.60747 5.06701 2.58809 6.18766 2.57732 7.16621C2.56656 7.70123 2.55687 8.24595 2.42661 8.57859C2.2942 8.91231 1.88082 9.34614 1.49758 9.74015C0.83122 10.4356 0.0744324 11.2322 0.0744324 12.2829C0.0744324 13.3325 0.83122 14.1302 1.49758 14.8267C1.88082 15.2196 2.27482 15.6341 2.42553 15.9871C2.57732 16.3402 2.56763 16.8645 2.57732 17.3995C2.58809 18.3792 2.60747 19.4987 3.38471 20.276C4.16195 21.0532 5.2826 21.0726 6.26115 21.0834C6.79617 21.0941 7.34089 21.1038 7.67353 21.2341C8.00725 21.3654 8.44108 21.7799 8.83509 22.1631C9.53051 22.8295 10.3282 23.5862 11.3778 23.5862C12.4274 23.5862 13.2251 22.8295 13.9216 22.1631C14.3145 21.7799 14.729 21.3859 15.0821 21.2351C15.4352 21.0834 15.9594 21.093 16.4945 21.0834C17.4741 21.0726 18.5937 21.0532 19.3709 20.276C20.1482 19.4987 20.1675 18.3792 20.1783 17.3995C20.1891 16.8645 20.1987 16.3198 20.329 15.9871C20.4603 15.6534 20.8748 15.2196 21.258 14.8256C21.9244 14.1302 22.6812 13.3325 22.6812 12.2829C22.6812 11.2333 21.9244 10.4356 21.258 9.73907ZM16.3739 10.4463L10.4595 16.098C10.3079 16.2403 10.1077 16.3195 9.89976 16.3195C9.6918 16.3195 9.49164 16.2403 9.33997 16.098L6.38172 13.2722C6.30193 13.2 6.23738 13.1125 6.19186 13.015C6.14635 12.9175 6.12079 12.8119 6.11669 12.7043C6.11259 12.5968 6.13003 12.4895 6.16799 12.3888C6.20594 12.2881 6.26365 12.196 6.33771 12.1179C6.41177 12.0398 6.50069 11.9774 6.59925 11.9341C6.69781 11.8909 6.80401 11.8678 6.91162 11.8663C7.01922 11.8647 7.12606 11.8846 7.22584 11.9249C7.32563 11.9652 7.41635 12.0251 7.49268 12.1009L9.8933 14.3918L15.2629 9.27509C15.4193 9.1336 15.6248 9.05889 15.8355 9.06692C16.0462 9.07495 16.2454 9.1651 16.3905 9.31809C16.5356 9.47107 16.6151 9.67476 16.612 9.88559C16.6089 10.0964 16.5235 10.2977 16.3739 10.4463Z"
			fill="#9379EC"
		/>
	</svg>
);
