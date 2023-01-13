import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList";
import { allPosts, Post } from "../.contentlayer/generated";
console.log(allPosts);
export const getStaticProps = async () => {
	const posts: Post[] = allPosts;
	return { props: { posts } };
};

const Home = ({ posts }: { posts: Post[] }) => {
	console.log(posts);
	return (
		<Layout>
			<PostList />
		</Layout>
	);
};

export default Home;
