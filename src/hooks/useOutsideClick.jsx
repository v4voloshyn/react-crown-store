import { useEffect, useRef } from 'react';

export const useOutsideClick = (handler, toggleButton) => {
	const domNodeRef = useRef();

	useEffect(() => {
		const clickOutsideHandler = (e) => {
			if (!domNodeRef.current.contains(e.target) && !toggleButton.contains(e.target)) {
				handler();
			}
		};

		document.addEventListener('mouseup', clickOutsideHandler);

		return () => {
			document.removeEventListener('mouseup', clickOutsideHandler);
		};
	}, []);

	return domNodeRef;
};
