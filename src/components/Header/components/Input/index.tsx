// Types
import { InputProps } from "../../types";

// Styled Components
import { InputContainer, InputIcon, InputS } from "./style";

// Images
import SearchIcon from "../../../../assets/img/header/search_icon.png";

// Functional Component
export const Input = (props: InputProps) => {
	// Rendering
	return (
		<InputContainer>
			<InputIcon src={SearchIcon} alt="Buscar" title="Buscar" />
			<InputS placeholder={props.placeholder} />
		</InputContainer>
	);
};
