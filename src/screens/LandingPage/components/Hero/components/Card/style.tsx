// Imports
import styled from "styled-components";

// Styled Components

export const CardS = styled.a`
	background: #cacaca;
	color: #262626;
	z-index: 2;
	border-radius: 0.5rem;
	display: grid;
	align-items: flex-end;
	min-height: 20rem;
	overflow: hidden;
	background-size: 100% 100%;

	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	&:hover,
	&:focus {
		background-size: 105% 105%;
	}

	&:hover > * > *,
	&:focus > * > * {
		transform: translateY(-0.25rem);
	}
`;

export const CardText = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	justify-content: flex-end;
	padding: 5%;
	background: linear-gradient(
		hsl(0 0% 0% / 0),
		hsl(20 0% 0% / 0.3) 30%,
		hsl(0 0% 0% / 1)
	);
`;

export const CardTitle = styled.h1`
	color: #ffffff;
	font-size: var(--fz-large);
`;

export const CardDescription = styled.div`
	text-align: justify;
	color: #dddddd;
	font-size: var(--fz-normal);
`;
