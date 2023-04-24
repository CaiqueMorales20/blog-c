// Imports
import styled from "styled-components";

// Imported Icons
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

// Styled Components
export const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: min(40rem, 100%);

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const InputIcon = styled(SearchAlt2)`
	width: 1.25rem;
	color: #e2d8d8;
	transform: translateX(1em);
	position: absolute;
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
