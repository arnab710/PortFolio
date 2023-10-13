import React, { useEffect, useState } from "react";

const useIntersectionObserver = (
	target: React.RefObject<Element>,
	{ root = null, rootMargin = "0px", threshold = 0.7 }: { root?: Element | null; rootMargin?: string; threshold?: number | number[] }
) => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	useEffect(() => {
		const targetElement = target.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root,
				rootMargin,
				threshold,
			}
		);

		if (targetElement) {
			observer.observe(targetElement);
		}

		return () => {
			if (targetElement) {
				observer.unobserve(targetElement);
			}
		};
	}, [target, root, rootMargin, threshold]);

	return isIntersecting;
};

export default useIntersectionObserver;
