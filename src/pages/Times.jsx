import videos from "../data/videos";

export default function Times() {
  return (
    <div className="prose prose-lg max-w-3xl mx-auto">
      <h1 className="text-3xl mobile-header md:static md:my-0 md:block mb-4 text-black dark:text-white">
        Times
      </h1>
      <hr className="my-4" />

      {videos.map((video) => (
        <div key={video.src} className="mb-8">
          <video controls className="w-full mt-4 rounded-xl shadow-lg">
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="my-0 text-sm text-right text-black dark:text-white">
            {video.intro}
          </p>
          <p className="mt-0 text-sm text-right text-black dark:text-white">
            {video.date}
          </p>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
}
