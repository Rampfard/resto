import { useEffect } from 'react';

const useOutsideClick = (ref, fn) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
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
