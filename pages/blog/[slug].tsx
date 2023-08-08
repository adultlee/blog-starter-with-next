import Layout from "../../components/Layout/Layout";
import { allPosts, Post } from "../../.contentlayer/generated";
import { GetStaticProps } from "next/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
	BlogContent,
	BlogTitle,
	BlogContainer,
} from "../../components/Blog/Blog";

const PostPage = ({ posts }: { posts: Post }) => {
	const MDXComponent = useMDXComponent(posts.body.code);

	return (
		<Layout>
			<BlogContainer>
				<BlogTitle>{posts.title}</BlogTitle>
				<BlogContent>
					<MDXComponent />
				</BlogContent>
			</BlogContainer>
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
