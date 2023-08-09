import Layout from "../components/Layout/Layout";
import { allPosts, Post } from "../.contentlayer/generated";
import Bio from "components/Bio";
import TechStack from "components/TexhStack";
import TimeStampSection from "components/TimeStamp";

export const getStaticProps = async () => {
	const posts: Post[] = allPosts.sort((a, b) => {
		if (a.publishedAt > b.publishedAt) return -1;
		else return 1;
	});

	return { props: { posts } };
};

const timestamps = [
	{
		date: "2023-08-10",
		activity: "Started working on project A.",
		links: ["https://github.com/project-a"],
	},
	{
		date: "2023-08-15",
		activity: "Completed initial design.",
		links: ["https://github.com/project-a/design"],
	},
	{
		date: "2023-08-20",
		activity: "Implemented authentication system.",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-25",
		activity: "Integrated frontend with backend.",
		links: [
			"https://github.com/project-a/frontend",
			"https://github.com/project-a/backend",
		],
	},
	{
		date: "2023-08-20",
		activity: "Implemented authentication system.",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-25",
		activity: "Integrated frontend with backend.",
		links: [
			"https://github.com/project-a/frontend",
			"https://github.com/project-a/backend",
		],
	},
	{
		date: "2023-08-20",
		activity: "Implemented authentication system.",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-25",
		activity: "Integrated frontend with backend.",
		links: [
			"https://github.com/project-a/frontend",
			"https://github.com/project-a/backend",
		],
	},
	{
		date: "2023-08-20",
		activity: "Implemented authentication system.",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-25",
		activity: "Integrated frontend with backend.",
		links: [
			"https://github.com/project-a/frontend",
			"https://github.com/project-a/backend",
		],
	},
];

const Home = ({ posts }: { posts: Post[] }) => {
	return (
		<Layout>
			<>
				<Bio />
				<TechStack />
				<TimeStampSection timestamps={timestamps} />
			</>
		</Layout>
	);
};

export default Home;
