import me from "../assets/me.jpg";

const Content = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <article className="flex-1 prose prose-lg max-w-4xl sm:mx-20 md:mx-44">
        <section className=" text-black dark:text-white">
          <h1 className="text-3xl mobile-header md:static md:my-0 md:block  text-black dark:text-white">
            Nianshu Zhang
          </h1>
          <p>
            你好，我是
            Nianshu，出生于山东济宁。我喜欢阅读，跑步，旅行，音乐，电影和编程，以及和喜欢的人一起度过美好的时光。
          </p>
          <p>
            过去的我总是被“夸赞”为是一个“听话的好孩子”，在学习上被寄予厚望，可偏偏未能有什么能拿出手的成绩。
            人如其名，喜欢读书但却没学会如何在学校读书。
          </p>
          <p>
            现在的我希望去看更大的世界去遇到更多的人，去了解这个世界运行的规律，也在这个过程中去了解自己。
          </p>
          <p>看得见风，听得见雨，闻得见花香，触得到阳光，也承受得了改变。</p>
          <div className="flex items-center space-x-4 m-5 ml-3 mr-3">
            <img
              src={me}
              alt="Nianshu Zhang"
              className="w-1/5 h-1/4 min-w-24 rounded-full shadow-lg m-2"
            />
            <p className="text-lg text-gray-600  dark:text-white">
              路生于行<br></br>Nothing changes if nothing changes.
            </p>
          </div>
          <p>
            hi, I’m Nianshu, born in Jining, Shandong. I enjoy reading, running,
            traveling, music, movies, and programming, as well as spending
            quality time with people I care about.{" "}
          </p>
          <p>
            In the past, I was often “praised” as a “well-behaved good kid,”
            with high expectations placed on my academic performance.
            Ironically, I never managed to achieve anything particularly
            impressive. True to my name, I loved reading but never quite learned
            how to truly study in school.
          </p>
          <p>
            Now, I hope to see a bigger world, meet more people, and understand
            how this world operates—while also coming to better understand
            myself in the process.
          </p>
          <p>
            I can see the wind, hear the rain, smell the flowers, feel the
            sunlight—and embrace change as well.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Content;
