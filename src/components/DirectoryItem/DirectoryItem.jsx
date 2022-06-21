import React from 'react';

import { DirectoryBody, DirectoryItemContainer, BackgroundImage } from './DirectoryItem.styles.jsx';

function DirectoryItem({ title, imageUrl }) {
	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<DirectoryBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryBody>
		</DirectoryItemContainer>
	);
}

export default DirectoryItem;
