import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList";

const Home: NextPage = () => {
	return (
		<Layout>
			<PostList />
		</Layout>
	);
};

export default Home;
