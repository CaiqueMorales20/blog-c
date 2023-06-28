// Imports
import { useContext } from "react";

// Imported Components
import { SearchItem } from "./SearchItem";

// Styled Components
import { SearchListS, TextS } from "./style";

// Data
import { NewsData } from "../../../../global/data";

// Context
import { HeaderContext } from "../..";
import { HeaderContextProps } from "../../types";

// Functional Component
export const SearchList = () => {
	// Variables
	const { search } = useContext(HeaderContext) as HeaderContextProps;
	const filteredPost = NewsData.filter((post) =>
		post.title.toLowerCase().includes(search.toLowerCase())
	);

	// Rendering
	return (
		<SearchListS>
			{search.length > 0 &&
				(filteredPost.length > 0 ? (
					filteredPost.map((item) => {
						// Rendering
						return <SearchItem name={item.title} id={item.id} key={item.id} />;
					})
				) : (
					<TextS>Nenhum post encontrado.</TextS>
				))}
		</SearchListS>
	);
};
