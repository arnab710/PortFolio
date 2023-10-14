import { useEffect, useState } from "react";

const useProgrssBarIncrease = (limit: number) => {
	const [val, setVal] = useState<number>(0);

	useEffect(() => {
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
