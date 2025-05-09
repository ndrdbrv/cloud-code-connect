import React from "react";
import Footer from "./Footer";

const Layout = ({ lobyLogo, children }) => {
	return (
		<main className="w-full flex-1">
			{children}
			<Footer {...{ lobyLogo }} />
		</main>
	);
};

export default Layout;
