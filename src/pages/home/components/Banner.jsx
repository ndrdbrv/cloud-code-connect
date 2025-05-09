import React from "react";
import GetStarted from "./GetStarted";

const Banner = () => {
	return (
		<>
			<section className="banner-section relative">
				<div className="container relative z-10">
					<div className="relative">
						<h1 className="title">
							Find flatmates <br /> that{" "}
							<span className="text-purple">actually fit</span>
						</h1>
						<div className="flex flex-wrap gap-4 mt-12 gap-y-7">
							<GetStarted className="max-sm:flex-grow max-sm:justify-center max-sm:max-w-[320px]" />
							<div className="flex gap-4">
								<a
									href="https://apps.apple.com/gb/app/loby/id6737482486"
									target="_blank"
									className="btn p-0 border-0 before:w-full before:h-full"
								>
									<img
										src="/img/app-store.svg"
										className="max-w-full w-[151px]"
										alt=""
									/>
								</a>

								<a
									href="https://play.google.com/store/apps/details?id=com.roomss.loby&pcampaignid=web_share"
									target="_blank"
									className="btn p-0 border-0 before:w-full before:h-full"
								>
									<img
										src="/img/play-store.svg"
										className="max-w-full w-[151px]"
										alt=""
									/>
								</a>
							</div>
						</div>
						<div className="flex items-center flex-wrap gap-3 mt-4 lg:mt-12 font-semibold text-[#727780]">
							<svg
								width="152"
								height="24"
								viewBox="0 0 152 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
									fill="#9379EC"
									stroke="#9379EC"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M44 2L47.09 8.26L54 9.27L49 14.14L50.18 21.02L44 17.77L37.82 21.02L39 14.14L34 9.27L40.91 8.26L44 2Z"
									fill="#9379EC"
									stroke="#9379EC"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M76 2L79.09 8.26L86 9.27L81 14.14L82.18 21.02L76 17.77L69.82 21.02L71 14.14L66 9.27L72.91 8.26L76 2Z"
									fill="#9379EC"
									stroke="#9379EC"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M108 2L111.09 8.26L118 9.27L113 14.14L114.18 21.02L108 17.77L101.82 21.02L103 14.14L98 9.27L104.91 8.26L108 2Z"
									fill="#9379EC"
									stroke="#9379EC"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M140 2L143.09 8.26L150 9.27L145 14.14L146.18 21.02L140 17.77L133.82 21.02L135 14.14L130 9.27L136.91 8.26L140 2Z"
									fill="#9379EC"
									stroke="#9379EC"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span>Over 4000 roommates found</span>
						</div>
					</div>
				</div>
				<img
					src="/img/banner-2.png"
					// src="/img/banner.png"
					className="absolute lg:-bottom-7 2xl:-bottom-20 select-none right-0 max-w-[1000px] w-[65vw] max-lg:top-[unset] max-lg:bottom-0 max-lg:translate-y-[0] max-lg:max-w-[unset] max-lg:w-full max-lg:relative max-lg:mt-10 max-md:w-[120%] max-md:translate-x-[-10%]"
					alt=""
				/>
				<img
					src="/img/banner-shape.svg"
					className="absolute top-[180px] max-w-full left-[calc(50%+380px)] max-lg:left-1/2 max-lg:top-[530px]  max-sm:left-[50%] max-sm:w-[50px]"
					alt=""
				/>
				<img
					src="/img/banner-shape-2.svg"
					className="absolute bottom-[180px] max-w-full left-[calc(50%-100px)] max-lg:hidden max-xl:bottom-20"
					alt=""
				/>
			</section>
		</>
	);
};

export default Banner;
