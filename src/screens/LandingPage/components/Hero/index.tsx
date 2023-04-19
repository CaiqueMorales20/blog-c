// Imported COmponents
import { Card } from "../../../../components/Card";

// Styled Components
import { HeroContent, HeroS } from "./style";

// Images
import bg1 from "../../../../assets/img/landing-page.png";

// Functional Component
export const Hero = () => {
	// Rendering
	return (
		<HeroS>
			<HeroContent>
				<Card bg={bg1} />
				<Card bg={bg1} />
				<Card bg={bg1} />
			</HeroContent>
		</HeroS>
	);
};
