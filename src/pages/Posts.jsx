import { Link } from "react-router-dom";
import posts from "../data/posts";

export default function Posts() {
  return (
    <div className="prose max-w-3xl mx-auto  text-black dark:text-white">
      <h1 className="text-3xl mb-4  text-black dark:text-white">Blog Posts</h1>
      <hr className="my-4" />
      <ul>
        {posts.map((post) => (
          <li key={post.link} className="mb-6">
            <Link
              to={`/posts/${post.link}`}
              className="text-blue-600 hover:underline text-xl font-medium"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            {/* <p>{post.excerpt}</p> */}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
