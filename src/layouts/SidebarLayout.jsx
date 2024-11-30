import NavMenu from "../components/NavMenu.jsx";
import Footer from "../components/Footer.jsx";
import Content from "../components/Content.jsx";

const SidebarLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                {/* 左侧边栏 */}
                <NavMenu />

                {/* 主内容区域 */}
                <main className="flex flex-col w-full px-6 md:max-w-xl">
                    <Content />
                    {/* 底部 */}
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default SidebarLayout;
