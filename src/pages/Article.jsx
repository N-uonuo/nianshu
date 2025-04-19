import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Article() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/articles/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("文章加载失败");
        return res.text();
      })
      .then(setContent)
      .catch((err) => setContent(`# 加载失败\n\n无法找到对应文章：${slug}`));
  }, [slug]);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto p-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="px-1 rounded">{children}</code>
            );
          },
          img({ node, ...props }) {
            return (
              <img
                {...props}
                className="max-w-full rounded-lg mx-auto my-4 shadow"
                alt={props.alt}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
