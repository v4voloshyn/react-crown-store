import { useContext } from 'react';

import { CategoriesContext } from '../../context/CategoriesContext';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import './Directory.scss';

const Directory = () => {
	const { directories } = useContext(CategoriesContext);

	return (
		<div className='categories-container'>
			{directories.map((directory) => (
				<DirectoryItem key={directory.id} {...directory} />
			))}
		</div>
	);
};

export default Directory;
