// Imports
import { useContext, useEffect } from "react";

// Imported Components
import { SearchList } from "../SearchList";

// Styled Components
import { InputContainer, InputIcon, InputS } from "./style";

// Images
import SearchIcon from "../../../../assets/img/header/search_icon.png";

// Types
import { InputProps } from "../../types";

// Context
import { HeaderContext } from "../..";
import { HeaderContextProps } from "../../types";

// Functional Component
export const Input = (props: InputProps) => {
	// Variables
	const { search, setSearch } = useContext(HeaderContext) as HeaderContextProps;

	// Rendering
	return (
		<InputContainer title="Buscar">
			<InputIcon src={SearchIcon} alt="Buscar" />
			<InputS
				onChange={(e: any) => setSearch(e.currentTarget.value)}
				placeholder={props.placeholder}
			/>
			{search.length > 0 && <SearchList />}
		</InputContainer>
	);
};
