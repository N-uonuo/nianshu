// src/components/NavMenu.jsx
import {Moon} from "../moon.jsx";
import {menuItems} from "./menuItems.js";

export default function NavMenu() {

    return (
        <>
            <nav className=" top-32 -ml-32 fixed w-32">
                <div className="w-full">
                    <ul className="group flex flex-col items-center gap-1">
                        <Moon/>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href="#"
                                    className=" text-lg leading-10 font-medium  transition-colors duration-300 ease-in-out "
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>


    )
}
