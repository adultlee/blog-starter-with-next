import PostCard from "./PostCard";
import styled from "@emotion/styled";
import { Post } from "../.contentlayer/generated";

const List = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-bottom: 20px;
`;

const PostList = ({ posts }: { posts: Post[] }) => {
	return (
		<List>
			{posts &&
				posts.map((post, index) => (
					<PostCard
						key={index}
						title={post.title}
						description={post.description}
						thumbnail={post.thumbnail}
						slug={post.slug}
						author={post.author}
					/>
				))}
		</List>
	);
};

export default PostList;
