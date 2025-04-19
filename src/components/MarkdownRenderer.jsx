import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ filePath }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filePath) {
      setError("文件路径无效");
      return;
    }

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`无法加载文件：${filePath}`);
        }
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setError(null); // 清除错误
      })
      .catch((error) => {
        console.error("加载 Markdown 文件时出错：", error);
        setError("加载内容失败，请稍后重试。");
      });
  }, [filePath]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
