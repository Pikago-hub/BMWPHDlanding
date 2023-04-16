import React from "react";

const DeliverablesCard = () => {
  // Define an array of card titles and URLs
  const cards = [
    {
      title: "Vision Document",
      url: "https://docs.google.com/document/d/1vCEhtK9Vi2rRxGvzNxCvJFT1siEEyUhy8O-QG2XHjIU/edit?usp=sharing",
      description:
        "The vision document outlines the high-level goals, objectives, and purpose of the project. It provides a clear direction for the project team and stakeholders.",
    },
    {
      title: "Team Meetings",
      url: "https://drive.google.com/drive/folders/1-YgMHPLsPOCoJr1Q93bsFm9IONO5pqcO?usp=share_link",
      description:
        "Team meetings are regular gatherings of the project team to discuss progress, address challenges, and make decisions. Meeting notes and agendas are documented for reference.",
    },
    {
      title: "Use Cases",
      url: "https://docs.google.com/document/d/1X1ARbJhduVjDSS1bWfSKdw_T_DZI2hSHPoO9Rq0UydA/edit?usp=sharing",
      description:
        "Use cases describe how users interact with the system and achieve their goals. They provide a detailed understanding of user requirements and help guide the design and development process.",
    },
    {
      title: "Prototypes",
      url: "https://www.figma.com/proto/5V3HlNyN3La6nKsqU60QC6/BMWPHD?node-id=142-3741&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=63%3A255&show-proto-sidebar=1",
      description:
        "Prototypes are visual representations of the user interface and functionality of the system. They help validate design decisions and gather feedback from users and stakeholders.",
    },
    {
      title: "Glossary",
      url: "https://docs.google.com/document/d/168N6_AfFEqz7ksZ00E7HJmOy2s8TDvxufvtZrPzCZ4o/edit?usp=sharing",
      description:
        "The glossary provides definitions for key terms and concepts used in the project. It ensures a common understanding of terminology among team members and stakeholders.",
    },
    {
      title: "Weekly Activity Report",
      url: "https://docs.google.com/spreadsheets/d/1MKZXyynO3wcwTKLdBGi7B_YcODnuBlyMutKCcdEx_lo/edit?usp=sharing",
      description:
        "The weekly activity report summarizes the tasks completed, progress made, and issues encountered during the week. It helps track the project's status and plan for upcoming work.",
    },
    {
      title: "Release and Iteration Plans",
      url: "https://docs.google.com/spreadsheets/d/1X29EEDWdW-G_yHfYKK4Hf0Uk_TatuRySIoS-71lr7EM/edit?usp=share_link",
      description:
        "Release and iteration plans outline the schedule and scope of work for each phase of the project. They help manage expectations and ensure timely delivery of features and functionality.",
    },
    {
      title: "Presentations",
      urls: [
        {
          label: "IAB Presentations",
          url: "https://docs.google.com/presentation/d/1wvCQ5_Jx7Lo7H9SLYZDF17wFDY1DMx8a/edit?usp=sharing&ouid=102101960657082090690&rtpof=true&sd=true",
        },
        {
          label: "Final Presentation",
          url: "https://docs.google.com/presentation/d/1QguIGn33MY1cSu4GB04mOIeZiPv6Fbqv/edit?usp=sharing&ouid=102101960657082090690&rtpof=true&sd=true",
        },
        {
          label: "Poster",
          url: "https://docs.google.com/presentation/d/19ZTu7dF2nzCifAWCOIcSm31LvKsr24jq/edit?usp=sharing&ouid=102101960657082090690&rtpof=true&sd=true",
        },
      ],
      description:
        "Presentations are used to communicate project updates, findings, and results to stakeholders and audiences. They may include slides for project overviews, demos, and discussions.",
    },
    {
      title: "Manuals and Documentation",
      urls: [
        {
          label: "User Manual",
          url: "https://docs.google.com/document/d/14XUOFgna7uFUk31KT751BE5oJitzn_IjuwAgSfpBb5k/edit?usp=share_link",
        },
        {
          label: "Developer's Manual",
          url: "https://docs.google.com/document/d/19lcpMkregXaCUYPLvdS1vtDcPPRRWo6_MD8q5FDd-A8/edit?usp=share_link",
        },
      ],
      description:
        "Manuals and documentation provide instructions for using the system and developing new features. They help users and developers understand the system and its components.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Deliverables</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Map over the cards array to render each card */}
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
            {/* Add a Link button to each card with the appropriate URL */}
            {card.url ? (
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Link
              </a>
            ) : (
              card.urls?.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  {link.label}
                </a>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverablesCard;
