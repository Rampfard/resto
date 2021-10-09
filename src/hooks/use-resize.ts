import { useEffect } from 'react';

export const useResize = (callback: () => void) => {
	useEffect(() => {
		const debouncedCallback = () => {
			let timer: NodeJS.Timeout;
			return () => {
				clearTimeout(timer);
				timer = setTimeout(callback, 500);
			};
		};

		window.addEventListener('resize', debouncedCallback());

		return () => {
			window.removeEventListener('resize', debouncedCallback());
		};
	}, [callback]);
};
