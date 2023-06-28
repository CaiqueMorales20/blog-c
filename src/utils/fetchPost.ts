// Imports
import { useEffect } from "react";

// Data
import { NewsData } from "../global/data";

// Utils
import invariant from "./invariant";

// Function
export default function fetchPost(
	postId: string | undefined,
	setPostData: (prev: any) => void
) {
	// Defining that its not null
	invariant(postId);

	// Fetching Data
	useEffect(() => {
		const array = NewsData.filter((item) => {
			return item.id == parseInt(postId);
		});
		setPostData(array[0]);
	}, []);
}
