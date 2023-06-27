// Imports
import { useParams } from "react-router-dom";

// Functional Component
export const Post = () => {
	// Variables
	const { postId } = useParams();

	// Rendering
	return <>Post {postId}</>;
};
