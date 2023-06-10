// Imported Components
import { NewsCard } from "../../../../components/NewsCard";
import { HeroData } from "../Hero/data";

// Styled Components
import { NewsContent, NewsS, TitleS } from "./style";

// Functional Components
export const News = () => {
	// Rendering
	return (
		<NewsS>
			<TitleS>Veja aqui meus útlimos posts </TitleS>
			<NewsContent>
				{HeroData.map((item, index) => {
					// Rendering
					return <NewsCard />;
				})}
			</NewsContent>
		</NewsS>
	);
};
