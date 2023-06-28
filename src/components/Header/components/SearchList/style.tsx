// Imports
import { styled } from "styled-components";

// Styled Components
export const SearchListS = styled.div`
	background-color: #363c47;
	position: absolute;
	top: 4rem;
	margin-left: 5%;
	width: 90%;
	border-radius: 1rem;
	padding: 1em;
	z-index: 9999;

	@media screen and (max-width: 768px) {
		margin-left: -10%;
		margin-right: -20%;
		width: 160%;
	}
`;

export const TextS = styled.p`
	color: #cacaca;
	font-size: 0.9rem;
`;
