// Styled Components
import {
	ImageContainer,
	ImageS,
	NewsCardS,
	TextContainer,
	TextS,
} from "./style";

// Image
import Img from "../../assets/img/teste.svg";
import { NewsCardProps } from "./types";

// Functional Component
export const NewsCard = (props: NewsCardProps) => {
	// Rendering
	return (
		<NewsCardS>
			<ImageContainer>
				<ImageS src={Img} />
			</ImageContainer>
			<TextContainer>
				<TextS>{props.name}</TextS>
			</TextContainer>
		</NewsCardS>
	);
};
