// Styled Components
import { ImageS, NewsCardS, TextContainer } from "./style";

// Image
import Img from "../../assets/img/teste.svg";

// Functional Component
export const NewsCard = () => {
	// Rendering
	return (
		<NewsCardS>
			<ImageS src={Img} />
			<TextContainer>
				<p>Focando em patterns no React</p>
			</TextContainer>
		</NewsCardS>
	);
};
