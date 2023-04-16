import Image from "next/image";

const Team = () => {
  // Define inline styles for the card elements
  const cardStyle = {
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const cardTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const cardDescStyle = {
    fontSize: "16px",
    color: "#777",
    marginTop: "5px",
  };

  const cardBtnStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "5px",
    marginTop: "10px",
    textDecoration: "none",
  };

  const imageWrapperStyle = {
    width: "200px", // Set the desired width
    height: "200px", // Set the desired height
    borderRadius: "10px", // Set the desired border radius
    overflow: "hidden", // Hide overflow to apply border radius to the image
    objectFit: "contain", // Ensure the image covers the entire area while maintaining its aspect ratio
  };

  return (
    <section className="py-20 mt-20">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-template-blue">
          Meet the Team
        </h1>
      </div>
      {/* Cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
        {/* Card */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <Image
              src="/img/chirayu.png"
              alt="Chirayu Jain"
              width={200}
              height={200}
            />
          </div>
          <h3 style={cardTitleStyle}>Chirayu Jain</h3>
          <p style={cardDescStyle}>Backend Development</p>
          <a
            style={cardBtnStyle}
            href="https://www.linkedin.com/in/chirayu-jain-5634bbab/"
          >
            explore more about Chirayu
          </a>
        </div>
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <Image
              src="/img/madison.jpg"
              alt="Madison Gresham"
              width={200}
              height={200}
            />
          </div>
          <h3 style={cardTitleStyle}>Madison Gresham</h3>
          <p style={cardDescStyle}>Frontend Development</p>
          <a
            style={cardBtnStyle}
            href="https://www.linkedin.com/in/madison-gresham/"
          >
            explore more about Madison
          </a>
        </div>
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <Image
              src="/img/jerry.jpg"
              alt="Jerry Wu"
              width={200}
              height={200}
            />
          </div>
          <h3 style={cardTitleStyle}>Jerry Wu</h3>
          <p style={cardDescStyle}>Frontend Development</p>
          <a style={cardBtnStyle} href="https://www.jerryzywu.com/">
            explore more about Jerry
          </a>
        </div>
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <Image
              src="/img/david.jpg"
              alt="David Hanft"
              width={200}
              height={200}
            />
          </div>
          <h3 style={cardTitleStyle}>David Hanft</h3>
          <p style={cardDescStyle}>Database Development</p>
          <a
            style={cardBtnStyle}
            href="https://www.linkedin.com/in/david-hanft/"
          >
            explore more about David
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
