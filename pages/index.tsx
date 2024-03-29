import Layout from "../components/Layout/Layout";
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
			<>이곳은 메인페이지 입니다. 팀 소개가 작성될 예정입니다.</>
		</Layout>
	);
};

export default Home;
