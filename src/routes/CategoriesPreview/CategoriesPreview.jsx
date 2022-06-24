import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategories } from '../../redux/categoriesStore/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategories);

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
