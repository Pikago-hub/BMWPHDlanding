import Card from "./card";

const Team = () => {
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
        <Card
          title="Chirayu Jain"
          desc="Backend Development"
          imgURL="/img/chirayu.jpg"
          btnContent="explore more about Chirayu"
          btnURL="https://www.linkedin.com/in/chirayu-jain-5634bbab/"
        />
        <Card
          title="Madison Gresham"
          desc="Frontend Development"
          imgURL="/img/madison.jpg"
          btnContent="explore more about Madison"
          btnURL="https://www.linkedin.com/in/madison-gresham/"
        />
        <Card
          title="Jerry Wu"
          desc="Frontend Development"
          imgURL="/img/jerry.jpg"
          btnContent="explore more about Jerry"
          btnURL="https://www.jerryzywu.com/"
        />
        <Card
          title="David Hanft"
          desc="Database Development"
          imgURL="/img/david.jpg"
          btnContent="explore more about David"
          btnURL="https://www.linkedin.com/in/david-hanft/"
        />
      </div>
    </section>
  );
};

export default Team;
