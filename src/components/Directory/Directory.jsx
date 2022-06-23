import './Directory.scss';

import DirectoryItem from '../DirectoryItem/DirectoryItem';
import { selectDirectories } from '../../redux/categoriesStore/category.selector';
import { useSelector } from 'react-redux';

const Directory = () => {
	const directories = useSelector(selectDirectories);

	return (
		<div className='categories-container'>
			{directories.map((directory) => (
				<DirectoryItem key={directory.id} {...directory} />
			))}
		</div>
	);
};

export default Directory;
