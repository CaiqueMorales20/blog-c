// Imports
import styled from "styled-components";

// Imported Components
import { Link } from "react-router-dom";

// Styled Components
export const HeaderS = styled.header`
	background-color: #292d35;
	display: flex;
	color: #ffffff;
`;

export const HeaderContent = styled.div`
	width: min(1440px, 80%);
	margin-inline: auto;
	height: var(--header-height);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2em;

	@media screen and (max-width: 768px) {
		gap: 1.75em;
	}
`;

export const Logo = styled(Link)`
	font-size: var(--fz-large);
	color: #fff;
`;
