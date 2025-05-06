import React from "react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

const BannerScreenshot = () => {
	const [isVisible, ref] = useInViewport({ threshold: 0.1 });
	return (
		<div
			className={cn("duration-[1s] transition-all", {
				"anime-1": !isVisible,
			})}
		>
			<div
				className="absolute max-md:top-0 md:top-[400px] left-0"
				ref={ref}
			></div>
			<img
				src="/img/banner-screenshot.svg"
				className="max-sm:w-[140vw] max-sm:max-w-[unset]"
				alt=""
			/>
		</div>
	);
};

export default BannerScreenshot;
