// Imports
import styled from "styled-components";

// Imported Icons
import { BsSearch } from "react-icons/bs";

// Styled Components
export const InputContainer = styled.div`
	display: grid;
	align-items: center;

	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

export const InputS = styled.input`
	background-color: #343945;
	color: #fefefe;
	border-radius: 4em;
	height: 2.5rem;
	padding-inline: 3em 2em;
	width: 45rem;

	&::placeholder {
		font-size: 0.9rem;
		color: #fefefe;
		letter-spacing: 0.5px;
	}
`;

export const InputIcon = styled(BsSearch)`
	color: #e2d8d8;
	transform: translateX(1em);
	z-index: 2;
`;
