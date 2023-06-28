// Types
import { InputProps } from "../../types";

// Styled Components
import { InputContainer, InputIcon, InputS } from "./style";

// Images
import SearchIcon from "../../../../assets/img/header/search_icon.png";
import { SearchList } from "../SearchList";

// Functional Component
export const Input = (props: InputProps) => {
	// Rendering
	return (
		<InputContainer title="Buscar">
			<InputIcon src={SearchIcon} alt="Buscar" />
			<InputS placeholder={props.placeholder} />
			<SearchList />
		</InputContainer>
	);
};
