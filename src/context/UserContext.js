import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const contextValue = {
		currentUser,
		setCurrentUser,
	};

	useEffect(() => {
		// Observe user auth state and rerender components
		const observer = onAuthStateChangedListener((user) => {
			console.log(user);
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return observer;
	}, []);

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
