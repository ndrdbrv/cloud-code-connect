import React from "react";
import { cn } from "../../../components/cn";
import { icons } from "../../../components/icons";
import useInViewport from "../../../components/useInViewport";

const FindFlatmate = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.1 });

	return (
		<section className="relative bg-white max-sm:pb-24 z-10">
			<div
				className="flatmate-section bg-purple-light"
				style={{
					WebkitMask: `url(/img/find-flatmate.png) no-repeat center center / 100% 100%`,
				}}
			>
				<img
					src="/img/find-flatmate/1.png"
					alt=""
					className={cn(
						"absolute top-[299px] left-[153px] max-xl:max-w-[200px] max-md:left-0 max-md:top-4 max-md:w-[120px] duration-700 transition-all",
						{
							"scale-0": !isVisible,
						}
					)}
				/>
				<img
					src="/img/find-flatmate/2.png"
					alt=""
					className={cn(
						"absolute left-0 -bottom-10 hidden md:block max-xl:max-w-[350px] duration-700 transition-all",
						{
							"translate-x-[-200px]": !isVisible,
						}
					)}
				/>
				<img
					src="/img/find-flatmate/3.png"
					alt=""
					className={cn(
						"absolute top-[160px] right-0 max-xl:max-w-[350px] max-md:max-w-[200px] max-md:top-[50px] duration-700 transition-all",
						{
							"translate-x-[200px]": !isVisible,
						}
					)}
				/>
				<div className="container">
					<div className="relative" ref={ref}>
						<h2 className="h2 max-w-[950px] mx-auto text-center mb-14 max-xl:max-w-[750px] max-xl:leading-[48px] max-sm:text-[8.5vw] max-sm:leading-[1.45]">
							Connecting{" "}
							<span
								className="duration-1000 transition-all inline-block"
								style={{ transform: !isVisible ? "scale(0)" : "" }}
							>
								{icons.eye}
							</span>{" "}
							you <br /> with{" "}
							<span
								className="duration-1000 transition-all inline-block"
								style={{ transform: !isVisible ? "scale(0)" : "" }}
							>
								{icons.smile}
							</span>{" "}
							the perfect flatmates from your university.
						</h2>
						<TitleBorder />
					</div>
				</div>
			</div>
			<img
				src="/img/find-flatmate/indie-hackers.svg"
				className={cn(
					"max-w-full absolute top-full -translate-y-[180px] xl:-translate-y-[350px] right-0 sm:right-8 pointer-events-none max-sm:px-4 max-xl:max-w-[357px] max-xl:w-full duration-1000 delay-300",
					{
						"-translate-y-[150px] xl:-translate-y-[300px]": !isVisible,
					}
				)}
				alt=""
			/>
		</section>
	);
};
const FindUsOn = () => {
	return (
		<>
			<div
				className="text-center flex flex-col items-center"
				style={{
					background:
						"url('/img/find-flatmate/find-flatmate-bg-2.svg') no-repeat center center / 100% 100%",
				}}
			>
				<div className="flex flex-col items-center justify-center">
					<h5 className="text-2xl font-semibold m-0">Find us on:</h5>
					<svg
						width="120"
						height="7"
						viewBox="0 0 120 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.79676 4.70768C21.34 -0.315788 70.0627 4.23015 117.678 3.89184"
							stroke="#2D3849"
							strokeWidth="4"
							strokeLinecap="round"
						/>
					</svg>
				</div>

				<img
					src="/img/find-flatmate/indie-hackers.png"
					className="max-w-full"
					alt=""
				/>
			</div>
		</>
	);
};
const TitleBorder = () => (
	<svg
		width="475"
		height="82"
		viewBox="0 0 475 82"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="max-w-full absolute top-[calc(100%+20px)] right-1/2 translate-x-1/2 xl:translate-x-[64%] max-xl:max-w-[300px] max-sm:max-w-[228px] max-sm:top-full"
	>
		<path
			d="M3 17.4268C150.735 17.4268 297.973 3.52316 445.726 3.52316C452.956 3.52316 489.297 1.79253 461.949 4.62662C376.509 13.4807 292.419 23.7409 208.195 41.4823C186.343 46.0854 164.095 49.139 142.318 53.9514C138.198 54.8619 140.264 54.9324 143.304 55.0549C156.097 55.57 169.129 54.9711 181.888 54.2824C251.756 50.5111 320.098 35.0615 389.714 29.5649C397.615 28.941 399.234 30.0137 391.468 34.1994C375.465 42.8235 358.139 48.6639 341.155 54.9445C330.569 58.8593 301.177 66.3294 296.981 79"
			stroke="#2D3849"
			strokeWidth="6"
			strokeLinecap="round"
		/>
	</svg>
);

export default FindFlatmate;
