import { Link, Outlet } from "react-router-dom";
import MarkdownRenderer from "../components/MarkdownRenderer.jsx";

const Writing = () => {
  return (
    <div className="md:max-w-xl">
      <h1 className="text-3xl mobile-header md:static md:my-0 md:block mb-4">
        Writing
      </h1>
      <hr className="mb-6" />
      <section>
        <h2 className="text-2xl mb-4">2025</h2>
        <Link to="/writing/2025-04-16">
          <p className="text-lg hover:underline">
            2025-04-16 My first blog post on this site
          </p>
        </Link>
      </section>

      {/* 渲染子路由 */}
      <Outlet />
    </div>
  );
};

export default Writing;
