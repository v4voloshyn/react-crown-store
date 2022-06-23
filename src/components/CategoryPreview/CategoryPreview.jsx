import { CategoryPreviewContainer, CategoryTitle, Preview } from './CategoryPreview.styles.jsx';

import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<CategoryTitle as='h2'>
				<Link to={title}>
					<span>{title.toUpperCase()}</span>
				</Link>
			</CategoryTitle>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
