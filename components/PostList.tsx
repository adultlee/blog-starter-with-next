import PostCard from "./PostCard";
import styled from "@emotion/styled";
const List = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	border: 1px solid red;
	flex-wrap: wrap;
`;

const PostList = () => {
	return (
		<List>
			<PostCard />
			<PostCard />
			<PostCard />
		</List>
	);
};

export default PostList;
