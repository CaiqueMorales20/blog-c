// Imported Components
import { Link } from "react-router-dom";

// Styled Components
import {
	ImageContainer,
	ImageS,
	NewsCardS,
	TextContainer,
	TextS,
} from "./style";

// Image
import { NewsCardProps } from "./types";

// Functional Component
export const NewsCard = (props: NewsCardProps) => {
	// Rendering
	return (
		<Link to={`/post/${props.id}`}>
			<NewsCardS>
				<ImageContainer>
					<ImageS src={props.img} />
				</ImageContainer>
				<TextContainer>
					<TextS>{props.name}</TextS>
				</TextContainer>
			</NewsCardS>
		</Link>
	);
};
