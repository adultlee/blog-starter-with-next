import Layout from "../components/Layout/Layout";
import { allPosts, Post } from "../.contentlayer/generated";
import Bio from "components/Bio";
import TechStack from "components/TechStack";
import TimeStampSection from "components/TimeStamp";
import DescriptionWithPhoto from "components/DescriptWithPhoto";
import Carousel from "components/Carousel";
import ProfileCard from "components/ProfileCard";
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
		activity: "공부시작!!!",
		links: ["https://github.com/project-a"],
	},
	{
		date: "2023-08-15",
		activity: "REeact 공부 싫음",
		links: ["https://github.com/project-a/design"],
	},
	{
		date: "2023-08-20",
		activity: "난 잘할 수 잇ㅆ겠지",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-10",
		activity: "공부시작!!!",
		links: ["https://github.com/project-a"],
	},
	{
		date: "2023-08-15",
		activity: "REeact 공부 싫음",
		links: ["https://github.com/project-a/design"],
	},
	{
		date: "2023-08-20",
		activity: "난 잘할 수 잇ㅆ겠지",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-10",
		activity: "공부시작!!!",
		links: ["https://github.com/project-a"],
	},
	{
		date: "2023-08-15",
		activity: "REeact 공부 싫음",
		links: ["https://github.com/project-a/design"],
	},
	{
		date: "2023-08-20",
		activity: "난 잘할 수 잇ㅆ겠지",
		links: ["https://github.com/project-a/auth"],
	},
	{
		date: "2023-08-10",
		activity: "공부시작!!!",
		links: ["https://github.com/project-a"],
	},
	{
		date: "2023-08-15",
		activity: "REeact 공부 싫음",
		links: ["https://github.com/project-a/design"],
	},
	{
		date: "2023-08-20",
		activity: "난 잘할 수 잇ㅆ겠지",
		links: ["https://github.com/project-a/auth"],
	},
];
const techStackData = [
	{
		type: "Frontend",
		stack: ["React", "Next.js", "Emotion"],
	},
	{
		type: "Backend",
		stack: ["Node.js", "Express", "MongoDB"],
	},
	// 추가 데이터
];

const profileData = [
	{
		imageSrc: "/member/member1.jpeg",
		name: "이성인",
		description: "Front-end Developer",
	},
	{
		imageSrc: "/member/member1.jpeg",
		name: "임영빈",
		description: "UI/UX Designer",
	},
	{
		imageSrc: "/member/member1.jpeg",
		name: "이동령",
		description: "Full Stack Developer",
	},
	{
		imageSrc: "/member/member1.jpeg",
		name: "임영빈",
		description: "UI/UX Designer",
	},
	{
		imageSrc: "/member/member1.jpeg",
		name: "이동령",
		description: "Full Stack Developer",
	},
	{
		imageSrc: "/member/member1.jpeg",
		name: "임영빈",
		description: "UI/UX Designer",
	},
	{
		imageSrc: "/member/member1.jpeg",
		name: "이동령",
		description: "Full Stack Developer",
	},
];

const Home = ({ posts }: { posts: Post[] }) => {
	return (
		<Layout>
			<>
				<Bio />
				<TechStack stackList={techStackData} />
				<TimeStampSection timestamps={timestamps} />
				<DescriptionWithPhoto
					title="특별한 정보를 담습니다!"
					imageUrl="/about/1.png"
					description="여기에는 설명을 담습니다! 여기에는 설명을 담습니다! 여기에는 설명을 담습니다! 여기에는 설명을 담습니다! 여기에는 설명을 담습니다! 여기에는 설명을 담습니다!"
				/>
				<Carousel>
					{profileData.map((profile, i) => (
						<ProfileCard
							key={i}
							name={profile.name}
							imageSrc={profile.imageSrc}
							description={profile.description}
						/>
					))}
				</Carousel>
			</>
		</Layout>
	);
};

export default Home;
