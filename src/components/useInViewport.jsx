import { useEffect, useRef, useState } from "react";

function useInViewport(options) {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			options
		);

		const element = elementRef.current;
		if (element) observer.observe(element);

		const handleScroll = () => {
			if (element) {
				const rect = element.getBoundingClientRect();
				const atBottom =
					rect.bottom <= window.innerHeight && window.scrollY === 0;

				if (atBottom) {
					setIsVisible(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			if (element) observer.unobserve(element);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [options]);

	return [isVisible, elementRef];
}

export default useInViewport;
