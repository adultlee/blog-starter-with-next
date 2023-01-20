import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList";
import { allPosts, Post } from "../.contentlayer/generated";

export const getStaticProps = async () => {
	const posts: Post[] = allPosts.sort((a, b) => {
		if (a.publishedAt > b.publishedAt) return -1;
		else return 1;
	});

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
