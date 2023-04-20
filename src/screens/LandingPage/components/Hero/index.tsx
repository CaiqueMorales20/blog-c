// Imported COmponents
import { Card } from "../../../../components/Card";

// Styled Components
import { HeroContent, HeroS } from "./style";

// Images
import bg1 from "../../../../assets/img/landing-page.png";

// Data
const HeroData = [
	{
		title: "Titulo da noticia",
		description:
			"Descrição sobre a noticias falando altas coisas. Descrição sobre a noticias falando altas coisas. Descrição sobre a noticias falando altas coisas.",
		bg: bg1,
	},
	{
		title: "Notícia secundária",
		description:
			"Descrição sobre a noticias falando altas coisas. Descrição sobre a noticias falando altas coisas. Descrição sobre a noticias falando altas coisas.",
		bg: bg1,
	},
	{
		title: "Notícia terciária",
		description:
			"Descrição sobre a noticias falando altas coisas. Descrição sobre a noticias falando altas coisas. Descrição sobre a noticias falando altas coisas.",
		bg: bg1,
	},
];

// Functional Component
export const Hero = () => {
	// Rendering
	return (
		<HeroS>
			<HeroContent>
				{HeroData.map((item, index) => {
					// Rendering
					return (
						<Card
							title={item.title}
							description={item.description}
							bg={item.bg}
							key={index}
						/>
					);
				})}
			</HeroContent>
		</HeroS>
	);
};
