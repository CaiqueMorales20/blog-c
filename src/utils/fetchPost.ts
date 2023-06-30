// Imports
import { useEffect } from "react";

// Data
import { NewsData } from "../global/data";

// Utils
import invariant from "./invariant";
import { useLocation } from "react-router-dom";

// Function
export default function fetchPost(
	postId: string | undefined,
	setPostData: (prev: any) => void
) {
	// Defining that its not null
	invariant(postId);

	// Location
	const location = useLocation();

	// Fetching Data
	useEffect(() => {
		const array = NewsData.filter((item) => {
			return item.id == parseInt(postId);
		});
		setPostData(array[0]);
	}, [location]);
}
