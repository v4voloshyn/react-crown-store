import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

import { CategoryPreviewContainer, Preview, CategoryTitle } from './CategoryPreview.styles.jsx';

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
