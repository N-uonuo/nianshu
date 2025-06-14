import images from "../data/images.js";

export default function SunsetWind() {
  return (
    <div className="prose prose-lg max-w-3xl mx-auto">
      <h1 className="text-3xl mobile-header md:static md:my-0 md:block mb-4 text-black dark:text-white">
        Sunset、Wind & Moon
      </h1>
      <hr className="my-4" />
      <div>
        {images.map((image) => (
          <>
            <img src={image.src} className="my-0" />
            {image.src_1 && <img src={image.src_1} className="my-2" />}
            <p className="my-2 text-sm text-right text-black dark:text-white">
              {image.intro}
            </p>
            <p className="mt-0 text-sm text-right text-black dark:text-white">
              {image.date}
            </p>
            <hr className="my-4" />
          </>
        ))}
      </div>
    </div>
  );
}
