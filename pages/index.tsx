import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList";
import { allPosts, Post } from "../.contentlayer/generated";

export const getStaticProps = async () => {
	const posts: Post[] = allPosts;

	return { props: { posts } };
};

const Home = ({ posts }: { posts: Post[] }) => {
	return (
		<Layout>
			<PostList posts={posts} />
		</Layout>
	);
};

export default Home;
