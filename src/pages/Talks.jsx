export default function Talks() {
  return (
    <div className="prose prose-lg max-w-3xl mx-auto">
      <h1 className="text-3xl mobile-header md:static md:my-0 md:block mb-4 text-black dark:text-white">
        Talks
      </h1>
      <hr className="my-4" />
      <video controls className="w-full mt-4 rounded-xl shadow-lg">
        <source src="public/videos/1054.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-sm text-right text-black dark:text-white">
        在云南省玉溪市易门县绿汁镇
      </p>
      <hr className="my-4" />
    </div>
  );
}
