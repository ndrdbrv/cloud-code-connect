import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "swiper/css/bundle";
import DeleteAccount from "./pages/delete-account/DeleteAccount";
import Home from "./pages/home/Home";
import Kcl from "./pages/kcl/Kcl";
import Lse from "./pages/lse/Lse";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Rent from "./pages/rent/Rent";
import TermsAndConditions from "./pages/term&condition/Term&condition";
import ThankYou from "./pages/thank-you/ThankYou";
function App() {
	function ScrollToTop() {
		const { pathname } = useLocation();
		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);
		return null;
	}

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/kcl" element={<Kcl />} />
				<Route path="/lse" element={<Lse />} />
				<Route path="/rent" element={<Rent />} />
				<Route path="/thankyou" element={<ThankYou />} />
				<Route path="/delete-account" element={<DeleteAccount />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route
					path="/terms-and-conditions"
					element={<TermsAndConditions />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
