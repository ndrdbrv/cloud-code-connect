import React from "react";
import { socialIcons2 } from "../../../components/icons";
import useInViewport from "../../../components/useInViewport";
const Footer = () => {
	const [isVisible2, ref2] = useInViewport({ threshold: 0.3 });
	return (
		<>
			<div
				className="container max-w-[1246px] text-[#9379EC] pt-[70px] md:pt-[137px]"
				ref={ref2}
			>
				<img
					src="/img/lobyBigLogo3.svg"
					alt=""
					className="duration-1000 transition-all w-full"
					style={{
						transform: !isVisible2 ? "translateY(100%)" : "",
					}}
				/>
			</div>
			<footer className="bg-[#F8F6F5] relative">
				<div className="pb-[70px] mt-10 md:-mt-12">
					<div className="container">
						<div className="flex gap-2 justify-center">
							<a href="" className="flex">
								{socialIcons2.linkedin}
							</a>
							<a href="" className="flex">
								{socialIcons2.instagram}
							</a>
							<a href="" className="flex">
								{socialIcons2.discord}
							</a>
							<a href="" className="flex">
								{socialIcons2.facebook}
							</a>
						</div>
						<div className="text-[#2E3C43] text-sm mt-10 text-center">
							All rights reserved loby
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
