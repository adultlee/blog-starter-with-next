import Layout from "../components/Layout/Layout";
import { allPosts, Post } from "../.contentlayer/generated";

export const getStaticProps = async () => {
	const posts: Post[] = allPosts.sort((a, b) => {
		if (a.publishedAt > b.publishedAt) return -1;
		else return 1;
	});

	return { props: { posts } };
};

const Blog = ({ posts }: { posts: Post[] }) => {
	return (
		<Layout>
			<div>blog</div>
		</Layout>
	);
};

export default Blog;
