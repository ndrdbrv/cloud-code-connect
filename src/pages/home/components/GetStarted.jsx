import React, { useState } from "react";
import { cn } from "../../../components/cn";

const GetStarted = ({ className }) => {
	const [showTypeform, setShowTypeform] = useState(false);

	// Function to handle the click and load the Typeform script
	const handleGetStartedClick = (e) => {
		setShowTypeform(true);

		// Dynamically add the Typeform script to the document
		const script = document.createElement("script");
		script.src = "https://embed.typeform.com/next/embed.js";
		script.async = true;
		document.body.appendChild(script);

		// Find the closest section or header tag and toggle a class
		const closestSectionOrHeader = e.target.closest("section, header");
		if (closestSectionOrHeader) {
			closestSectionOrHeader.classList.add("active-section");
		}
	};
	return (
		<>
			<button
				type="button"
				className={cn("btn", {
					[className]: className,
				})}
				onClick={handleGetStartedClick}
			>
				<span>Get Started</span>
			</button>
			{showTypeform && (
				<div className="fixed top-0 left-0 w-full h-full flex flex-wrap justify-center items-center z-[9999999]">
					<div
						className="absolute inset-0 bg-black bg-opacity-80"
						onClick={() => {
							setShowTypeform(false);
							const allSectionsAndHeaders =
								document.querySelectorAll("section, header");
							allSectionsAndHeaders.forEach((element) => {
								element.classList.remove("active-section");
							});
						}}
					></div>
					<div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<div
							className="w-10 h-10 border-[3px] border-white border-opacity-30 rounded-full animate-spin"
							style={{
								borderTopColor: "white",
								borderRightColor: "white",
							}}
						></div>
					</div>
					<div className="typeform-container bg-white rounded-xl relative z-[99]">
						<div
							className="typeform-embed"
							data-tf-live="01JEN9F01VPKJHMNHDNGV5PDDG"
						></div>
					</div>
				</div>
			)}
		</>
	);
};

export default GetStarted;
