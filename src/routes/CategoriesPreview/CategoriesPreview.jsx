import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '../../redux/categoriesStore/category.selector';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import Spinner from '../../components/Spinner/Spinner';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				})
			)}
		</>
	);
};

export default CategoriesPreview;
