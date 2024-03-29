import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		publishedAt: {
			type: "string",
			required: true,
		},
		tags: {
			type: "list",
			required: true,
			of: { type: "string" },
			default: [],
		},
		thumbnail: {
			type: "string",
			required: true,
		},
		author: {
			type: "string",
			required: true,
		},
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/${post._raw.flattenedPath}`,
		},
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
		},
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});
