// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`, // 指定 Markdown 文件的位置
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
}))

export default makeSource({
  contentDirPath: 'content',  // 存放 Markdown 文件的目录
  documentTypes: [Post],
})
