import React from "react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

export default function RentHero() {
	const [isVisible, ref] = useInViewport();
	return (
		<>
			<div className="h-screen" ref={ref}></div>
			<section className="pt-[120px] sm:pt-[200px] xl:pt-[278px] overflow-hidden fixed top-0 left-0 w-full h-screen">
				<div className="container">
					<h1
						className={cn("rent-hero-title relative duration-700", {
							"scale-75 translate-y-20 opacity-0": !isVisible,
						})}
					>
						The new <br /> way <br className="sm:hidden" /> to rent
					</h1>
					<div className="hidden md:block max-w-[1050px] mx-auto">
						<img
							className="md:mt-[100px] xl:mt-20"
							src="/img/rent/hero-vector-2.svg"
							alt=""
						/>
					</div>
					<img
						className={cn(
							"absolute top-[190px] left-[calc(50%+450px)] xl:left-[calc(50%+550px)] duration-1000 transition-all",
							{
								"scale-0": !isVisible,
							}
						)}
						src="/img/rent/hero-vector-4.svg"
						alt=""
					/>
					<img
						className={cn(
							"absolute top-[310px] sm:top-[360px] xl:top-[450px] right-0 z-[50] max-w-[calc(100%-24px)] duration-1000 transition-all",
							{
								"translate-y-full": !isVisible,
							}
						)}
						src="/img/rent/hero-vector-3.svg"
						alt=""
					/>
					<img
						className={cn(
							"absolute top-4 right-[calc(50%+270px)] lg:right-[calc(50%+330px)] xl:right-[calc(50%+430px)] duration-1000 transition-all delay-300",
							{
								"-translate-x-full": !isVisible,
							}
						)}
						src="/img/rent/hero-vector-1.svg"
						alt=""
					/>
				</div>
			</section>
		</>
	);
}
