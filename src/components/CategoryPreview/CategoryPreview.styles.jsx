import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const CategoryTitle = styled.div`
	text-transform: uppercase;
	font-size: 32px;
	margin-bottom: 25px;
	cursor: pointer;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	column-gap: 20px;
`;
