import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DirectoryBody, DirectoryItemContainer, BackgroundImage } from './DirectoryItem.styles';

function DirectoryItem({ title, imageUrl }) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`shop/${title}`);
	};

	return (
		<DirectoryItemContainer onClick={handleNavigate}>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<DirectoryBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryBody>
		</DirectoryItemContainer>
	);
}

export default DirectoryItem;
