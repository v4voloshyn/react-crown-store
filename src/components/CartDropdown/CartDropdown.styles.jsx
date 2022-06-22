import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 300px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	overflow: auto;
	button {
		margin-top: auto;
		flex: 0 1 auto;
	}
`;

export const EmptyCartMessage = styled.div`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItemsWrapper = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	margin-bottom: 10px;
	overflow-y: auto;
`;
