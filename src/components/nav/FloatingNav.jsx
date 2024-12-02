import {useState} from 'react';
import {menuItems} from "./menuItems.js";
import {Moon} from "../moon.jsx";

export const FloatingNav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            {/* 按钮部分 */}
            <button
                className={`fixed bg-white bottom-14 right-7 z-[99] flex h-10 w-10 items-center justify-center rounded-full`}
                role="presentation"
                onClick={toggleNav}
            >
                <div>
                    {!isNavVisible ? (
                        <svg viewBox="0 0 20 20" strokeLinecap="round"
                             className="h-5 w-5 stroke-black stroke-[1.5] dark:stroke-zinc-800">
                            <path d="M 2 2.5 L 20 2.5"></path>
                            <path d="M 2 9.423 L 20 9.423" opacity="1"></path>
                            <path d="M 2 16.346 L 20 16.346"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="size-6 text-black"
                             onClick={toggleNav}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    )}
                </div>
            </button>

            {/* 浮动导航部分 */}
            <div
                className={`fixed w-full h-full bg-[#1A1A1D] bg-opacity-90 z-50 transition-all duration-500 ease-in-out
                    ${isNavVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    pointerEvents: isNavVisible ? 'auto' : 'none', // 使遮罩层在不可见时不阻止点击
                }}
                onClick={() => setIsNavVisible(false)} // 点击遮罩层关闭导航
            >
                <div
                    className="fixed bottom-24 right-5 p-4 rounded-lg z-[100]" // 确保浮动菜单内容在最上层
                    onClick={(e) => e.stopPropagation()} // 防止点击菜单内容时关闭导航
                >
                    <Moon />
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.id} className="list-none text-2xl leading-10">
                                <a href="#" className="underline">
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
