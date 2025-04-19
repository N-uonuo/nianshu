import { useState } from "react";
import { Moon } from "./moon.jsx";
import { Link, useLocation } from "react-router-dom"; // 导入 useLocation
import navLinks from "./navLinks"; // 导入导航链接数据

export const FloatingNav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { pathname } = useLocation(); // 使用 useLocation 获取 pathname

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {/* 按钮部分 */}
      <button
        className="fixed md:hidden bg-white bottom-14 right-7 z-[99] flex h-10 w-10 items-center justify-center rounded-full shadow-lg"
        role="presentation"
        onClick={toggleNav}
      >
        {!isNavVisible ? (
          <svg
            viewBox="0 0 20 20"
            strokeLinecap="round"
            className="h-5 w-5 stroke-black stroke-[1.5] dark:stroke-zinc-800"
          >
            <path d="M 2 2.5 L 20 2.5" />
            <path d="M 2 9.423 L 20 9.423" />
            <path d="M 2 16.346 L 20 16.346" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* 浮动遮罩背景 */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out
          ${
            isNavVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        bg-black/70 backdrop-blur-md`}
        onClick={() => setIsNavVisible(false)}
      >
        {/* 导航菜单容器 */}
        <div
          className="lg:left-20 fixed bottom-24 right-12 p-6 rounded-xl bg-white shadow-2xl z-[100] transition-transform duration-500"
          onClick={(e) => e.stopPropagation()} // 阻止冒泡，不关闭菜单
        >
          <Link to="/" onClick={() => setIsNavVisible(false)}>
            <Moon />
          </Link>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsNavVisible(false)}
                className={`block ${
                  pathname === link.to
                    ? "font-semibold text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-500`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
