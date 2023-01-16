import Layout from "../../components/Layout/Layout";
import { allPosts, Post } from "../../.contentlayer/generated";
import { GetStaticProps } from "next/types";
import styled from "@emotion/styled";
import { useMDXComponent } from "next-contentlayer/hooks";

export const PostContainer = styled.div`
	width: 100%;
`;

export const PostTitle = styled.h1`
	font-size: 30px;
	word-break: keep-all;
`;

export const PostContent = styled.div`
	margin-top: 36px;
	border: 1px solid pink;
`;

const PostPage = ({ posts }: { posts: Post[] }) => {
	let title = "hihi";
	const MDXComponent = useMDXComponent(posts.body.code);

	return (
		<Layout>
			<PostContainer>
				<PostTitle>{title}</PostTitle>
				<PostContent>
					<MDXComponent />
				</PostContent>
			</PostContainer>
		</Layout>
	);
};

export const getStaticPaths = async () => {
	return {
		paths: allPosts.map((post: any) => ({ params: { slug: post.slug } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const posts = allPosts.find(
		(post: any) => params && post.slug === params.slug
	);

	return {
		props: { posts },
	};
};

export default PostPage;
