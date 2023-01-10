import PostCard from "./PostCard";
import styled from "@emotion/styled";
const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	column-gap: 2.8vw;
	row-gap: 20px;
	align-items: center;
	justify-content: start;
	border: 1px solid green;
`;

const PostList = () => {
	return (
		<List>
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</List>
	);
};

export default PostList;
