import { Accordion } from "./accordian";

const FAQ = () => {
  return (
    <section className="bg-template-white py-20">
      <div className="container">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-template-blue">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-template-grey mt-4">
            Here are some of our FAQs. If you have any other questions
            unanswered, feel free to email us.
          </p>
        </div>
        {/* FAQ Items */}
        <Accordion
          title="What challenges did you face during the development of the racing horses database?"
          content="During the development of the racing horses database, we faced several challenges, including collecting and organizing comprehensive data on horses, ensuring data accuracy and consistency, and designing a user-friendly interface that allows users to easily search and access information. We worked diligently to overcome these challenges and create a valuable resource for our users."
        />
        <Accordion
          title="How did you obtain the data for the racing horses database?"
          content="The data for the racing horses database was obtained through a combination of sources, including our own breeding and training records, collaboration with industry partners, and research into publicly available information. We also worked closely with experts in the field to ensure that the data is accurate and up-to-date."
        />
        <Accordion
          title="How can users search for information on racing horses in the database?"
          content="Users can search for information on racing horses in our database using a variety of criteria, including horse name, pedigree, discipline, and performance history. Our user-friendly search interface allows users to quickly find and access the information they are looking for."
        />
        <Accordion
          title="How do you ensure the quality and accuracy of the information in the racing horses database?"
          content="We take data quality and accuracy very seriously. Our team carefully reviews and verifies all information before it is added to the database. We also update the database regularly to ensure that it reflects the latest information and developments in the industry."
        />
        <Accordion
          title="Can users contribute information to the racing horses database?"
          content="We welcome contributions from users and industry partners. If you have information that you would like to contribute to the racing horses database, please feel free to contact us. Our team will review the information and, if appropriate, add it to the database."
        />
        <Accordion
          title="What are the future plans for enhancing the racing horses database?"
          content="Our current solution is a prototype that provides essential functionality to users. Moving forward, we plan to enhance our database by expanding its content and introducing tiered subscription levels to accommodate diverse user needs. We'll also focus on improving the user experience by optimizing the interface and search capabilities. Ultimately, our goal is to establish our racing horses database as a leading resource for the reining and reined cowhorse disciplines, delivering valuable insights to the equestrian community."
        />
      </div>
    </section>
  );
};

export default FAQ;
