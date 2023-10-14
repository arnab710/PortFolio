import { useEffect, useState } from "react";

const useProgrssBarIncrease = (limit: number, insideViewPort: boolean) => {
	const [val, setVal] = useState<number>(0);

	useEffect(() => {
		if (!insideViewPort) return;
		const intervalfxn = () => {
			if (val < limit) setVal((val) => val + 1);
			else clearInterval(interval);
		};

		const interval = setInterval(intervalfxn, 5);

		return () => clearInterval(interval);
	});

	return val;
};
export default useProgrssBarIncrease;
