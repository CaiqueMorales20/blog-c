// Types
import { InputProps } from "../../types";

// Styled Components
import { InputContainer, InputIcon, InputS } from "./style";

// Functional Component
export const Input = (props: InputProps) => {
	// Rendering
	return (
		<InputContainer>
			<InputIcon />
			<InputS placeholder={props.placeholder} />
		</InputContainer>
	);
};
