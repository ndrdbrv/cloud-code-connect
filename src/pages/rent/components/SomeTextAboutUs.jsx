import React from "react";
import { cn } from "../../../components/cn";
import useInViewport from "../../../components/useInViewport";

export default function SomeTextAboutUs() {
	const [isVisible, ref] = useInViewport({ threshold: 0.3 });
	return (
		<section className="overflow-hidden" id="our-story">
			<div className="container">
				<div
					className="relative pt-[129px] xl:pt-[158px] pb-[300px] lg:pb-[200px]"
					ref={ref}
				>
					<h2
						className={cn(
							"text-[#F28FBD] text-[78px] leading-[0.87] tracking-tight font-semibold md:text-[120px] xl:text-[176px] max-w-[900px] duration-1000 transition-all",
							{
								"translate-x-1/2 opacity-50 scale-50": !isVisible,
							}
						)}
					>
						Some text about us
					</h2>
					<p className="font-medium mt-8 md:mt-12 xl:mt-20 max-w-[524px] min-h-[200px] relative z-10">
						Lorem ipsum dolor sit amet consectetur. Nunc nisl tempor in
						amet cursus vestibulum💗. Sed aenean augue purus in faucibus
						feugiat hendrerit eu. Faucibus viverra aliquam aliquet
						facilisis velit sed morbi ultrices. Quisque sem id egestas
						mauris id mauris nunc euismod.
					</p>
					<div className="absolute bottom-0 md:-right-20 right-[-140px] lg:right-[-160px] xl:-right-20 max-xl:max-w-[600px] max-lg:pl-20 max-sm:pl-16 max-sm:w-[calc(100%+140px)]">
						<div className="absolute top-0 right-[45%] lg:-top-12 hidden lg:block">
							{arrow}
						</div>
						<div className="absolute -translate-y-1/2 left-0 top-[40%] lg:hidden">
							{arrow2}
						</div>
						<img
							src="/img/about.png"
							className={cn(
								"max-w-[unset] sm:max-w-full max-sm:w-[460px] delay-300 duration-1000 transition-all",
								{
									"opacity-0 scale-50": !isVisible,
								}
							)}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
const arrow = (
	<svg
		width="146"
		viewBox="0 0 146 91"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={{ maxWidth: "100%" }}
	>
		<path
			d="M2 20.3989C19.5883 10.5248 36.0936 0.365298 56.272 8.01917C63.6025 10.7997 70.6799 16.3435 75.5601 22.4438C84.567 33.7024 64.8241 57.3581 51.7401 44.2742C48.1406 40.6747 42.2632 37.2427 43.2843 31.7286C45.0155 22.38 49.1592 16.2973 55.2772 9.01397C64.9617 -2.51521 85.9825 1.56018 96.7273 9.23504C117.092 23.7811 116.974 47.2329 125.3 69.089C127.759 75.5426 130.364 82.2911 132.54 88.8192C133.936 93.0072 123.558 82.2692 122.15 80.8608C121.344 80.0546 111.092 70.6963 112.036 69.7522C113.035 68.7536 122.031 78.7523 122.868 79.5897C124.589 81.3098 130.244 88.8595 131.766 86.0559C135.226 79.683 139.097 72.314 144.257 67.1546"
			stroke="#2D3849"
			stroke-width="2.16841"
			stroke-linecap="round"
			stroke-dasharray="4.34 4.34"
		/>
	</svg>
);
const arrow2 = (
	<svg
		width="59"
		height="95"
		viewBox="0 0 59 95"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={{ maxWidth: "100%" }}
	>
		<path
			d="M12.9192 1.36328C6.50702 12.7836 -0.090419 23.5007 4.87884 36.6035C6.6841 41.3635 10.2836 45.9593 14.2446 49.1284C21.5549 54.9772 36.916 42.1582 28.4206 33.662C26.0834 31.3246 23.8551 27.508 20.2746 28.1709C14.2042 29.2947 10.2543 31.9852 5.52483 35.9576C-1.96177 42.2457 0.683835 55.8953 5.66703 62.8725C15.1116 76.0963 30.3396 76.0206 44.5312 81.4278C48.7218 83.0244 53.1036 84.7164 57.3425 86.1296C60.0619 87.0362 53.0897 80.2972 52.1752 79.3826C51.6517 78.8591 45.5754 72.202 44.9623 72.815C44.3139 73.4634 50.8061 79.3054 51.3498 79.8491C52.4666 80.9661 57.3688 84.6389 55.5482 85.6271C51.41 87.8733 46.6249 90.3868 43.2746 93.7368"
			stroke="#2D3849"
			stroke-width="1.40802"
			stroke-linecap="round"
			stroke-dasharray="2.82 2.82"
		/>
	</svg>
);
