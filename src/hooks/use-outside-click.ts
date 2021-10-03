import { RefObject, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	fn: (e: MouseEvent) => void
) => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				fn(event);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, fn]);
};

export default useOutsideClick;
