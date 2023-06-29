// Imports
import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

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
		<motion.div animate={{ x: 200 }}>
			<PostS>
				<ImageS src={postData?.img} title={postData?.title} />
				<TitleS>{postData?.title}</TitleS>
				<DescriptionS>{postData?.description}</DescriptionS>
			</PostS>
		</motion.div>
	);
};
