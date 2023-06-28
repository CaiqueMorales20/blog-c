// Imported Components
import { NewsCard } from "../../../../components/NewsCard";

// Styled Components
import { NewsContent, NewsS, TitleS } from "./style";

// Data
import { NewsData } from "../../../../global/data";

// Functional Components
export const News = () => {
	// Rendering
	return (
		<NewsS>
			<TitleS>Veja aqui meus útlimos posts </TitleS>
			<NewsContent>
				{NewsData.map((item, index) => {
					// Rendering
					return (
						<NewsCard
							img={item.img}
							name={item.title}
							id={item.id}
							key={index}
						/>
					);
				})}
			</NewsContent>
		</NewsS>
	);
};
