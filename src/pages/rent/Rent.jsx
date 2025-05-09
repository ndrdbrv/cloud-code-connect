import React from "react";
import Faq from "../home/components/Faq";
import BestValueApartment from "./components/BestValueApartment";
import Connecting from "./components/Connecting";
import EnquireAlone from "./components/EnquireAlone";
import Footer from "./components/Footer";
import MatchWithOthers from "./components/MatchWithOthers";
import RentHero from "./components/RentHero";
import RentMatchAndEnquire from "./components/RentMatchAndEnquire";
import RentNavbar from "./components/RentNavbar";
import SomeTextAboutUs from "./components/SomeTextAboutUs";

const Rent = () => {
	return (
		<div className="overflow-hidden bg-[#F8F6F5]">
			<RentHero />
			<RentMatchAndEnquire />
			<div className="bg-[#F8F6F5] z-10 relative">
				<RentNavbar />
				<BestValueApartment />
				<MatchWithOthers />
				<EnquireAlone />
				<Connecting />
				<SomeTextAboutUs />
				<Faq className="!py-0" style={{}} />
				<Footer />
			</div>
		</div>
	);
};

export default Rent;
