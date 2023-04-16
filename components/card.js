import Image from "next/image";

const Card = ({ title, desc, imgURL, btnContent, btnURL }) => {
  return (
    <div className="flex flex-col rounded-md shadow-lg">
      <div className="p-6 flex flex-col items-center">
        <div className="relative w-28 h-36">
          {" "}
          {/* Set the increased width and height for the container */}
          <Image
            src={imgURL ?? "/img/vercel.svg"}
            alt=""
            layout="fill" // Use 'fill' layout to fill the container
            objectFit="cover" // Ensure the image covers the entire area while maintaining its aspect ratio
          />
        </div>
        <h3 className="mt-5 mb-2 text-template-blue text-lg">{title}</h3>
        <p className="mb-2 text-template-grey font-light">{desc}</p>
      </div>
      <hr className="border-b border-template-white" />
      <div className="flex p-6">
        <a
          href={btnURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button type="button" className="btn btn-purple w-full">
            {btnContent}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
