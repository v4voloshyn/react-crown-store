import React, { useEffect } from 'react';

import { COLLECTIONS_ENUM } from '../../utils/firebase/collections.enum';
import Directory from '../../components/Directory/Directory';
import { Outlet } from 'react-router-dom';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase';
import { setDirectories } from '../../redux/categoriesStore/category.action';
import { useDispatch } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// addCollectionAndDocuments('directory', DIRECTORY);
		const getDirectories = async () => {
			const directories = await getCollectionAndDocuments(COLLECTIONS_ENUM.DIRECTORY);
			dispatch(setDirectories(directories));
		};
		getDirectories();
	}, [dispatch]);

	return (
		<div className=''>
			<Directory />
			<Outlet />
		</div>
	);
};

export default Home;
