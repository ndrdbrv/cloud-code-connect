import React from "react";
import { cn } from "../../../components/cn";
import { icons } from "../../../components/icons";
import useInViewport from "../../../components/useInViewport";

const OurStory = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });

	return (
		<section
			className={cn("bg-white relative", {
				"story-animation": !isVisible,
			})}
		>
			<div className="pb-[200px] xl:pb-[500px] relative">
				<div className="our-story-section pb-[325px]">
					<div className="overflow-hidden">
						<div className="container xl:max-w-[1153px]">
							<div className="story relative xl:h-[839px]">
								<div className="relative z-10 text-center max-w-[929px] mx-auto">
									<h2 className="h2 text-center xl:text-[95px] xl:leading-[1.1] mb-4 xl:mb-[51px]">
										Our story
									</h2>
									{icons.storyShape1}
									{icons.storyShape2}
									<p className="m-0 xl:text-[28px] font-semibold text-dark-blue text-opacity-80 max-xl:max-w-[700px] mx-auto xl:leading-[1/35]">
										Last year, flatmate conflicts created a living
										nightmare for each of us, causing stress and
										draining motivation. And to top it all off, rent
										went up… So one of our flatmates moved out,
										sticking us in the painfully slow process of
										finding a replacement.
									</p>
								</div>
								<div className="absolute inset-0 max-md:-inset-x-24 max-xl:-inset-x-24">
									<img
										src="/img/story-bg.svg"
										alt=""
										className="w-full absolute top-0 h-full xl:w-auto xl:max-w-[unset] left-1/2 -translate-x-1/2"
									/>
								</div>
							</div>
						</div>
					</div>
					<div ref={ref}></div>
					<div
						className={cn(
							"absolute w-full left-1/2 -translate-x-1/2 min-h-[450px] md:min-h-[500px] xl:min-h-[881px] flex justify-center items-center z-10",

							{
								"top-[calc(100%-420px)] md:top-[calc(100%-480px)] ":
									!isVisible,
								"top-[calc(100%-440px)] md:top-[calc(100%-880px)] ":
									isVisible,
							}
						)}
						style={{ transition: "all ease 2s" }}
					>
						<div className="absolute inset-0 max-md:-inset-x-24 max-xl:-inset-x-24">
							<img
								src="/img/story-bg-2.svg"
								alt=""
								className="w-full absolute top-0 h-full xl:w-auto xl:max-w-[unset] left-1/2 -translate-x-1/2"
							/>
						</div>
						<div className="relative">
							<div className="m-0 xl:text-[28px] font-semibold text-dark-blue text-opacity-80 max-xl:max-w-[700px] mx-auto xl:leading-[1/35] max-w-[918px] text-center sm:-translate-y-6">
								Finally, this September we decided to move in together
								and were all instantly surprised just how much our
								living experience improved. The positive
								connection between us fuelled motivation, relieved
								stress and truly made our apartment feel like a home.
								This inspired us to create loby, so no one has to share
								the same experience of an uncomfortable living
								situation. Don’t settle, elevate your living experience.
							</div>
						</div>
						<img
							src="/img/story-bg-3.png"
							alt=""
							className="max-w-full right-0 top-full absolute translate-y-[-450px] pointer-events-none max-xl:w-[450px] max-xl:translate-y-[-280px] max-sm:translate-y-[-140px] max-sm:w-[280px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
