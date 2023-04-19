// Imports
import styled from "styled-components";

// Styled Components

export const CardS = styled.a`
	background: #cacaca;
	color: #262626;
	z-index: 2;
	border-radius: 1rem;
	display: grid;
	align-items: flex-end;
	min-height: 20rem;
	overflow: hidden;
	background-size: 100% 100%;
	transition: all.5s;

	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	&:focus {
		outline: 1px solid #fafafa;
	}

	&:hover {
		background-size: 110% 110%;
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
		hsl(20 0% 0% / 0.3) 50%,
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
