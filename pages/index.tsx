import Layout from "../components/Layout/Layout";
import { allPosts, Post } from "../.contentlayer/generated";
import Bio from "components/Bio";
import TechStack from "components/TexhStack";
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
			<>
				<Bio />
				<TechStack />
			</>
		</Layout>
	);
};

export default Home;
