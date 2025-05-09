import React from "react";
import { Link } from "react-router-dom";

export default function RentNavbar() {
	return (
		<header className="fixed top-4 md:top-8 w-full left-0 z-[999]">
			<div className="container">
				<navbar className="flex justify-between items-center gap-3 mx-auto max-w-[733px] navbar-shadow rounded-full p-[6px] pl-4 bg-white">
					<Link to="/" className="block">
						<img src="/img/logo.svg" width={100} height={32} alt="" />
					</Link>
					<nav className="hidden md:flex gap-4 md:gap-8">
						{menu.map((item, index) => (
							<a
								href={item.link}
								key={index}
								className="text-[#151B22] font-semibold"
							>
								{item.title}
							</a>
						))}
					</nav>
					<Link
						to="https://apps.apple.com/gb/app/loby/id6737482486"
						target="_blank"
						className="flex max-sm:max-w-[122px]"
					>
						<img
							src="/img/app-store-2.svg"
							className="max-w-full"
							alt=""
						/>
					</Link>
				</navbar>
			</div>
		</header>
	);
}

const menu = [
	{
		title: "Apartments",
		link: "#apartments",
	},
	{
		title: "How it works",
		link: "#how-it-works",
	},
	{
		title: "Our story",
		link: "#our-story",
	},
];
