// Imports
import { useState } from "react";
import { useParams } from "react-router-dom";

// Styled Components
import { DescriptionS, ImageS, PostS, TitleS } from "./style";

// Types
import { PostParams, PostProps } from "./types";

// Utils
import fetchPost from "../../utils/fetchPost";

// Functional Component
export const Post = () => {
	// Variables
	const [postData, setPostData] = useState<PostProps>();
	const { postId } = useParams<PostParams>();

	// Functions
	fetchPost(postId, setPostData);

	// Rendering
	return (
		<PostS>
			<ImageS src={postData?.img} />
			<TitleS>{postData?.title}</TitleS>
			<DescriptionS>{postData?.description}</DescriptionS>
		</PostS>
	);
};
