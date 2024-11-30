const Content = () => {
    return (
        <article className="flex-1 ">
            <section>
                <h1 className="text-2xl">Nianshu Zhang</h1>
                <p>你好，我是 Nianshu，2004 年出生于山东济宁。这是我第一次尝试使用 React
                    来构建一个博客。我喜欢阅读，跑步，旅行，音乐，电影和编程，以及和喜欢的人一起度过美好的时光。
                </p>
                <p>
                    这个网站是模仿 <a href="https://www.sixian.li/" className="underline">Sixian Li</a> 的风格制作的，
                    虽然并不认识她，但是她的博客给我留下了深刻的印象，所以我决定模仿她的风格来制作这个博客。
                    这是一个拙劣的模仿，但希望未来的我也可以成为像她一样优秀的人。
                </p>
                <p>
                     <a href="https://heroicons.com/" className="underline">Heroicons</a> 好像是一个很棒的图标库，我在这个网站上找到了很多好看的图标。
                    以后我也会尝试使用这个图标库来制作一些图标。（这段先写在这里，以后在做规整）
                </p>
            </section>

        </article>
    );
}

export default Content;