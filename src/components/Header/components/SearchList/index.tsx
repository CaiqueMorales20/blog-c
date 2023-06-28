// Styled Components
import { SearchItem } from "./SearchItem";
import { SearchListS } from "./style";

// Data
import { NewsData } from "../../../../global/data";

// Functional Component
export const SearchList = () => {
	// Rendering
	return (
		<SearchListS>
			{NewsData.map((item) => {
				// Rendering
				return <SearchItem name={item.title} key={item.id} />;
			})}
		</SearchListS>
	);
};
