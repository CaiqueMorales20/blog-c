// Styled Components
import { CardS, CardText, CardTitle, CardDescription } from "./style";

// Types
import { CardProps } from "./types";

// Functional Components
export const Card = (props: CardProps) => {
	// Rendering
	return (
		<CardS href="" style={{ backgroundImage: `url(${props.bg})` }}>
			<CardText>
				<CardTitle>{props.title}</CardTitle>
				<CardDescription>{props.description}</CardDescription>
			</CardText>
		</CardS>
	);
};
