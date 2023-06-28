// Imports
import { useState } from "react";

// Imported COmponents
import { Card } from "./components/Card";

// Styled Components
import { HeroContent, HeroS } from "./style";

// Data
import { NewsData } from "../../../../global/data";

// Functional Component
export const Hero = () => {
	// Variables
	const lastNews = NewsData.slice(-3);

	// Rendering
	return (
		<HeroS>
			<HeroContent>
				{lastNews.map((item, index) => {
					// Rendering
					return (
						<Card
							title={item.title}
							description={item.description}
							img={item.img}
							id={item.id}
							key={index}
						/>
					);
				})}
			</HeroContent>
		</HeroS>
	);
};
