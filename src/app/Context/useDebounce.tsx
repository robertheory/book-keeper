import { useEffect, useRef } from 'react';

const useDebounce = () => {
	const timeout = useRef<ReturnType<typeof setTimeout> | null>();

	const debounce =
		(func: (...args: any[]) => void, wait: number = 1000) =>
		(...args: any) => {
			if (timeout.current) clearTimeout(timeout.current);

			timeout.current = setTimeout(() => func(...args), wait);
		};

	useEffect(() => {
		return () => {
			if (!timeout.current) return;
			clearTimeout(timeout.current);
		};
	}, []);

	return { debounce };
};

export default useDebounce;
