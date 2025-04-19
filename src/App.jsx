import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Talks from "./pages/Talks";
import Article from "./pages/Article";

import FloatingNav from "./components/FloatingNav";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      {/* Sidebar for desktop */}
      <aside className="w-52 fixed h-full border-r bg-white hidden md:block">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-0 md:ml-52 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/Talks" element={<Talks />} />
          <Route path="/posts/:slug" element={<Article />} />
        </Routes>
        <Footer />
      </main>

      {/* Floating nav for mobile */}
      <FloatingNav />
    </div>
  );
}
