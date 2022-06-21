import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview-container'>
			<h2 className='title'>
				<Link to={title}>
					<span>{title.toUpperCase()}</span>
				</Link>
			</h2>
			<div className='preview'>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
