// Imported COmponents
import { Card } from "../../../../components/Card";

// Styled Components
import { HeroContent, HeroS } from "./style";

// Data
import { HeroData } from "./data";

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
