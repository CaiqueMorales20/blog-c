// Imports
import styled from "styled-components";

// Imported Icons
import { BsSearch } from "react-icons/bs";

// Styled Components
export const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: min(45rem, 100%);
`;

export const InputS = styled.input`
	background-color: #343945;
	color: #fefefe;
	border-radius: 4em;
	height: 2.5rem;
	padding-inline: 3em 2em;
	width: 100%;

	&::placeholder {
		font-size: 0.8;
		font-weight: 500;
		color: #fefefe;
		letter-spacing: 0.5px;
	}
`;

export const InputIcon = styled(BsSearch)`
	color: #e2d8d8;
	transform: translateX(1em);
	position: absolute;
`;