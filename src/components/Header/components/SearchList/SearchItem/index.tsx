// Styled Components
import { useContext } from "react";
import { SearchItemS, TextS } from "./style";

// Types
import { SearchItemProps } from "./type";

// Context
import { HeaderContext } from "../../..";
import { HeaderContextProps } from "../../../types";

// Functional Component
export const SearchItem = (props: SearchItemProps) => {
	// Variables
	const { setSearch } = useContext(HeaderContext) as HeaderContextProps;

	// Rendering
	return (
		<SearchItemS>
			<TextS onClick={() => setSearch("")} to={`/post/${props.id}`}>
				{props.name}
			</TextS>
		</SearchItemS>
	);
};
