// Imports
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Styled Components
import { DescriptionS, ImageS, PostS, TitleS } from "./style";

// Types
import { PostParams, PostProps } from "./types";

// Utils
import fetchPost from "../../utils/fetchPost";
import { PageTransition } from "../../global/GlobalStyle";

// Functional Component
export const Post = () => {
	// Variables
	const [postData, setPostData] = useState<PostProps>();
	const location = useLocation();
	const [reloadAnimation, setReloadAnimation] = useState(true);
	const { postId } = useParams<PostParams>();
	fetchPost(postId, setPostData);

	useEffect(() => {
		setReloadAnimation(!reloadAnimation);
	}, [location]);

	// Rendering
	return (
		<>
			{reloadAnimation && <PageTransition />}
			{!reloadAnimation && <PageTransition />}
			<PostS>
				<ImageS src={postData?.img} title={postData?.title} />
				<TitleS>{postData?.title}</TitleS>
				<DescriptionS>{postData?.description}</DescriptionS>
			</PostS>
		</>
	);
};
