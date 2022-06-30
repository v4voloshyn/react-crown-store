import { CategoryPreviewContainer, CategoryTitle, Preview } from './CategoryPreview.styles.jsx';

import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../Spinner/Spinner.jsx';
import { selectIsCategoriesLoading } from '../../redux/categoriesStore/category.selector.js';
import { useSelector } from 'react-redux';

const CategoryPreview = ({ title, products }) => {
	const isLoading = useSelector(selectIsCategoriesLoading);
	return (
		<CategoryPreviewContainer>
			<CategoryTitle as='h2'>
				<Link to={title}>
					<span>{title.toUpperCase()}</span>
				</Link>
			</CategoryTitle>
			<Preview>
				{isLoading ? (
					<Spinner />
				) : (
					products
						.filter((_, idx) => idx < 4)
						.map((product) => <ProductCard key={product.id} {...product} />)
				)}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
