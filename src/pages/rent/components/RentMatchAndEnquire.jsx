import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

export default function RentMatchAndEnquire() {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<>
			<section
				className="bg-[#FFD2E5] pt-[146px] sm:pt-[200px] lg:pt-[350px] pb-[323px] xl:pt-[410px] xl:pb-[347px] relative overflow-hidden RentMatchAndEnquire-Hero"
				style={{
					mask: "url(/img/rent/mask.png) no-repeat top center / 100% 100%",
				}}
				ref={ref}
			>
				<div className={"container"}>
					<h2
						className={cn(
							"text-[#F28FBD] match-enquire-text duration-1000 transition-all",
							{
								"translate-y-20 scale-50": !isVisible,
							}
						)}
					>
						Match&
						<br />
						enquire
						<br />
						instantly
					</h2>
					<img
						className="absolute top-[230px] left-[calc(50%+450px)] xl:left-[calc(50%+550px)]"
						src="/img/rent/hero-vector-5.svg"
						alt=""
					/>
					<img
						className="absolute top-[350px] sm:top-[300px] xl:top-[390px] left-[calc(50%+12px)] max-w-[300px] md:max-w-[400px] lg:max-w-[500px] max-sm:left-[calc(50%-60px)]"
						src="/img/rent/phones.png"
						alt=""
					/>
					<Link
						to="https://apps.apple.com/gb/app/loby/id6737482486"
						target="_blank"
					>
						<img
							className="absolute sm:top-[500px] lg:top-[700px] xl:top-[860px] left-[calc(50%-100px)] sm:left-[calc(50%-200px)] max-sm:max-w-[120px] max-sm:top-[auto] max-sm:bottom-[70px]"
							src="/img/rent/app-store.svg"
							alt=""
						/>
					</Link>
				</div>
			</section>
			<div className="bg-[#F8F6F5] h-10 -mt-10 relative z-10"></div>
		</>
	);
}
