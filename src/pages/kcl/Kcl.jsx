import React from "react";
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import UniversityFlatmate from "./components/UniversityFlatmate";

const Kcl = () => {
	return (
		<div className="overflow-hidden">
			<Layout lobyLogo="/img/lobyBigLogo2.svg">
				<Banner />
				<UniversityFlatmate />
				<br />
				<br />
				<br />
			</Layout>
		</div>
	);
};

export default Kcl;
