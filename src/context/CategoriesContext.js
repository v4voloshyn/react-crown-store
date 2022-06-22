import { createContext, useEffect, useState } from 'react';

import {
	addCollectionAndDocuments,
	getDirectoriesAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebase';

// import SHOP_DATA from '../../src/SHOP_DATA';
// import DIRECTORY from '../../src/DIRECTORY';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const [directories, setDirectories] = useState([]);

	useEffect(() => {
		// addCollectionAndDocuments('categories', SHOP_DATA);
		const getCategories = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};

		getCategories();
	}, []);

	useEffect(() => {
		// addCollectionAndDocuments('directory', DIRECTORY);
		const getDirectories = async () => {
			const directories = await getDirectoriesAndDocuments();
			setDirectories(directories);
		};
		getDirectories();
	}, []);

	const value = {
		categoriesMap,
		directories,
	};

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
