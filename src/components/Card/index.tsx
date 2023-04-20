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
				<CardTitle>Titulo da noticia.</CardTitle>
				<CardDescription>
					Descrição sobre a noticias falando altas coisas. Descrição sobre a
					noticias falando altas coisas. Descrição sobre a noticias falando
					altas coisas.
				</CardDescription>
			</CardText>
		</CardS>
	);
};
