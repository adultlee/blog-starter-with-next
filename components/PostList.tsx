import PostCard from "./PostCard";
import styled from "@emotion/styled";
import { allPosts, Post } from "../.contentlayer/generated";

const List = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	border: 1px solid red;
	flex-wrap: wrap;
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
						slug={post.slug}
					/>
				))}
		</List>
	);
};

export default PostList;
