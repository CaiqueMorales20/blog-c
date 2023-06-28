import { SearchItemS, TextS } from "./style";
import { SearchItemProps } from "./type";

// Functional Component
export const SearchItem = (props: SearchItemProps) => {
	// Rendering
	return (
		<SearchItemS>
			<TextS>{props.name}</TextS>
		</SearchItemS>
	);
};
