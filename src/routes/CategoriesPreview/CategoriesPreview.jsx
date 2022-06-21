import { useContext } from 'react';

import { CategoriesContext } from '../../context/CategoriesContext';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	console.log(categoriesMap);

	return (
		<>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return <CategoryPreview key={title} title={title} products={products} />;
			})}
		</>
	);
};

export default CategoriesPreview;
