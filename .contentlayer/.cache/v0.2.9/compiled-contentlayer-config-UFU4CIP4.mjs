// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      required: true,
      of: { type: "string" },
      default: []
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UFU4CIP4.mjs.map
