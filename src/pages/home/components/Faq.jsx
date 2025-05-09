import React, { useState } from "react";
import { icons } from "../../../components/icons";

const Faq = () => {
	const [open, setOpen] = useState([0]);
	return (
		<section className="faq-section  xl:py-[170px] pb-[80px]">
			<div
				className="bg-[#FDC1D5] py-[100px] lg:py-[232px]"
				style={{
					WebkitMask: `url(/img/faq.png) no-repeat center center / 100% 100%`,
				}}
			>
				<div className="container">
					<h2 className="h2 text-center text-white mb-9 md:mb-12">FAQ</h2>
					<div className="flex flex-col gap-[10px] max-w-[918px] mx-auto">
						{data?.map((faq, fIndex) => (
							<div className="bg-white rounded-[20px]" key={fIndex}>
								<h5
									className="flex justify-between items-center text-lg md:text-2xl font-semibold cursor-pointer p-5 md:p-7 select-none"
									onClick={() => setOpen([fIndex])}
								>
									<span className="w-0 flex-grow">{faq.title}</span>
									<span>
										{open.includes(fIndex)
											? icons.arrowUp
											: icons.arrowDown}
									</span>
								</h5>
								{open.includes(fIndex) && (
									<div>
										<div className="p-5 md:p-8 pt-0 md:pt-0 text-[14px] md:text-[18px] md:leading-[27px]">
											<div className="">{faq.text}</div>
											{faq?.info ? (
												<ul className="list-disc pl-4 mt-4 text-[16px]">
													{faq.info?.map((info, index) => (
														<li
															key={index}
															dangerouslySetInnerHTML={{
																__html: info,
															}}
															className="mb-2"
														/>
													))}
												</ul>
											) : (
												""
											)}
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		title: "What is Loby?",
		text: "We help you save money on rent by matching you with the perfect flatmate! Just download the app, make a profile and swipe away to find your ideal flat and flatmates.",
	},
	{
		title: "How do I choose my flatmates?",
		text: "After you make a profile you can swipe through potential flatmates you think you’ll vibe with. You’ll be recommended people with similar personality, lifestyle, living arrangements and if you both like each other BOOM! It's a match!",
	},
	{
		title: "Can you find me apartments too?",
		text: "Once you’ve found your ideal flatmates we’ll contact you with apartments tailored to your living preferences.",
	},
	{
		title: "Do I need to pay anything?",
		text: "Loby is completely free to use for everyone!",
	},
	{
		title: "Is my data safe with loby?",
		text: "Yes, your data is safe with Loby. All personal information is stored securely. Our privacy policy ensures that your data is only used to improve your experience on the platform and for matching purposes.",
	},
	{
		title: "Is it safe to live with people I meet on loby?",
		text: "At Loby, we prioritise creating a safe and trustworthy platform for finding flatmates. Even though we verify profiles to maintain quality, here are 3 tips for staying safe:",
		info: [
			"<strong>Meet in public first:</strong> Choose a safe, public space to meet.",
			"<strong>Ask questions:</strong> Discuss living preferences and trust your instincts.",
			"<strong>Tell someone:</strong> Share your plans with a friend or family member. Never overlook safety when meeting new people!",
		],
	},
];

export default Faq;
