import Home from "../pages/Home.jsx";
import Writing from "../pages/writing.jsx";
import MarkdownRenderer from "../components/MarkdownRenderer.jsx";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/writing/*",
    element: <Writing />,
    children: [
      {
        path: "2025-04-16",
        element: <MarkdownRenderer filePath="/articles/2025-04-16.md" />,
      },
    ],
  },
];

export default routes;
