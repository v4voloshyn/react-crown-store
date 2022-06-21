import styled from 'styled-components';

export const DefaultButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.1px;
	line-height: 50px;
	padding: 0 15px 0 15px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Philosopher', sans-serif;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const GoogleSignInButton = styled(DefaultButton)`
	background-color: #4285f4;
	color: white;
	&:hover {
		background-color: #357ae8;
		color: #f2f2f2;
		border: none;
	}
`;

export const InvertedDefaultButton = styled(DefaultButton)`
	background-color: white;
	color: black;
	border: 1px solid black;
	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

// .button-container {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.1px;
//   line-height: 50px;
//   padding: 0 15px 0 15px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: 'Philosopher', sans-serif;
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   transition: all .2s ease-in-out;

//   &: hover {
//     background-color: white;
// color: black;
// border: 1px solid black;
//   }

//   &.google - sign -in {
//   background- color: #4285f4;
// color: white;

//     &:hover {
//   background - color: #357ae8;
//   border: none;
// }
//   }

//   &.inverted {
//   background - color: white;
//   color: black;
//   border: 1px solid black;

//     &:hover {
//     background - color: black;
//     color: white;
//     border: none;
//   }
// }
// }
