// Imports
import { styled } from "styled-components";

// Importeed Components
import { Link } from "react-router-dom";

// Styled Components
export const SearchItemS = styled.div`
	border-bottom: 1px solid #cacaca;
	&:last-of-type {
		border-bottom: none;
	}
`;

export const TextS = styled(Link)`
	padding-block: 1em;
	width: 100%;
	color: #cacaca;
	font-size: 0.9rem;
`;
