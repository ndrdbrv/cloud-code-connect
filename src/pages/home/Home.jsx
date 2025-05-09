import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import ExploreBestFit from "./components/ExploreBestFit";
import Faq from "./components/Faq";
import FindFlatmate from "./components/FindFlatmate";
import FindRoommate from "./components/FindRoommate";
import HowItWorks from "./components/HowItWorks";
import OurStory from "./components/OurStory";
import Partners from "./components/Partners";
import RoommateSection from "./components/RoommateSection";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<Layout>
				<Header />
				<Banner />
				<ExploreBestFit />
				<RoommateSection />
				<Partners />
				<FindRoommate />
				<FindFlatmate />
				<HowItWorks />
				<OurStory />
				<Faq />
			</Layout>
		</div>
	);
};

export default Home;
