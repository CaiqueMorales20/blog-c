// Imports
import styled from "styled-components";

// Styled Components
export const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: min(40rem, 100%);

	@media screen and (max-width: 768px) {
		justify-content: flex-end;
	}
`;

export const InputIcon = styled.img`
	width: 1rem;
	color: #e2d8d8;
	transform: translateX(1em);
	position: absolute;
	z-index: 3;

	@media screen and (max-width: 768px) {
		position: inherit;
		width: 0.8rem;
	}
`;

export const InputS = styled.input`
	background-color: #343945;
	color: #fefefe;
	border-radius: 4em;
	height: 2.5rem;
	padding-inline: 3em 2em;
	width: 100%;
	z-index: 2;

	&::placeholder {
		font-size: 0.8rem;
		color: #efefef;
		opacity: 0.5;
		letter-spacing: 0.5px;
	}

	@media screen and (max-width: 768px) {
		margin-left: -1em;

		&::placeholder {
			font-size: 0.7rem;
			color: #efefef;
			opacity: 0.5;
			letter-spacing: 0.5px;
		}
	}
`;
