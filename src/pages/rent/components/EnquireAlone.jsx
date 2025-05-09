import React from "react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

export default function EnquireAlone() {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });

	return (
		<section
			className="py-[100px] xl:pt-[210px] xl:pb-[125px] max-xl:pb-0"
			id="how-it-works"
		>
			<div className="container">
				<h2 className="h2 text-center mb-9 lg:mb-0 xl:mb-12 mx-auto max-w-[765px] lg:text-[48px] lg:leading-[1.2]">
					Enquire alone or team up with others that match your vibe
				</h2>
				<div
					className="relative flex justify-center max-xl:scale-75 max-lg:scale-100 max-sm:scale-90"
					ref={ref}
				>
					<div className="pl-10 max-w-[355px] max-lg:max-w-[300px] max-sm:max-w-[280px]">
						<img
							className={cn("max-w-full duration-1000 transition-all", {
								"scale-50 opacity-0 !delay-0": !isVisible,
							})}
							src="/img/enquire-alone/mobile.png"
							alt=""
						/>

						<img
							className={cn(
								"absolute top-[15%] lg:top-[7%] left-[55%] lg:left-[calc(50%+180px)] duration-500 transition-all delay-300 max-lg:max-w-[250px]",
								{
									"scale-50 opacity-0 !delay-0": !isVisible,
								}
							)}
							src="/img/enquire-alone/web-1.svg"
							alt=""
						/>
						<img
							className={cn(
								"absolute top-[18%] left-[calc(50%+470px)] duration-500 transition-all max-md:hidden",
								{
									"scale-50 opacity-0 !delay-0": !isVisible,
								}
							)}
							src="/img/enquire-alone/web-2.svg"
							alt=""
							style={{ transitionDelay: "600ms" }}
						/>
						<img
							className={cn(
								"absolute top-[50%] lg:top-[40%] left-[70%] lg:left-[calc(50%+280px)] duration-500 transition-all max-lg:max-w-[300px] max-md:hidden",
								{
									"scale-50 opacity-0 !delay-0": !isVisible,
								}
							)}
							src="/img/enquire-alone/web-3.svg"
							alt=""
							style={{ transitionDelay: "900ms" }}
						/>
						<img
							className={cn(
								"absolute top-[45%] right-[calc(50%+250px)] duration-500 transition-all max-lg:max-w-[300px] max-lg:right-[calc(50%+100px)] max-md:hidden",
								{
									"scale-50 opacity-0 !delay-0": !isVisible,
								}
							)}
							src="/img/enquire-alone/web-4.svg"
							alt=""
							style={{ transitionDelay: "1200ms" }}
						/>
						<img
							className={cn(
								"absolute top-[23%] md:right-[calc(50%+340px)] lg:right-[calc(50%+540px)] duration-500 transition-all delay-1000 max-sm:!delay-1000 max-lg:max-w-[200px] max-md:hidden",
								{
									"scale-50 opacity-0 !delay-0": !isVisible,
								}
							)}
							src="/img/enquire-alone/web-5.svg"
							alt=""
							style={{ transitionDelay: "1500ms" }}
						/>
						<img
							className={cn(
								"absolute top-[50%] md:top-[14%] right-[40%] md:right-[calc(50%+55px)] lg:right-[calc(50%+145px)] duration-500 transition-all maxsm:-z-[-1] max-md:max-w-[240px] max-sm:!delay-1000 max-lg:max-w-[300px]",
								{
									"scale-50 opacity-0 !delay-0": !isVisible,
								}
							)}
							src="/img/enquire-alone/web-6.svg"
							alt=""
							style={{ transitionDelay: "1800ms" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
