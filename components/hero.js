import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative container flex flex-col-reverse lg:flex-row gap-12 mt-14 lg:mt-28 w-full">
      {/* Content */}
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="text-template-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
          BMWPHD
        </h2>
        <p className="text-template-grey text-lg text-center lg:text-left mb-6">
          BMW Quarter Horses breeds and raises prospects for the reining and
          reined cowhorse disciplines with a focus on pedigree, conformation, a
          good mind, and soundness.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="https://www.bmwphd.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-purple flex items-center gap-4"
            >
              Experince BMWPHD
              <Image
                src="/img/racinghorse.png"
                width={30}
                height={30}
                alt="BMWPHD Logo"
              />
            </button>
          </a>
        </div>
      </div>
      {/* Image and Rounded Rectangle */}
      <div className="relative flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 overflow-hidden rounded-full bg-template-purple">
        <img
          src="./img/BMWPHD.png"
          alt=""
          className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
