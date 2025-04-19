import { Link, useLocation } from "react-router-dom";
import { Github, Mail, Book } from "lucide-react";
import { Moon } from "./moon.jsx";
import navLinks from "./navLinks";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="p-16 space-y-10 text-sm">
      <div className="space-y-4">
        <Moon />
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`block text-xl  dark:text-black hover:text-blue-500 ${
              pathname === link.to ? "font-semibold text-blue-600" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex space-x-4 pt-6 border-t  dark:text-black">
        <a href="https://github.com/N-uonuo" target="_blank">
          <Github size={18} />
        </a>
        <a href="mailto:you@example.com">
          <Mail size={18} />
        </a>
        <a href="/posts">
          <Book size={18} />
        </a>
      </div>
    </div>
  );
}
