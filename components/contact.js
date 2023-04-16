import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contents, setContents] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const createMailToLink = () => {
    const body = `Name: ${name}\nPhone Number: ${phoneNumber}\nContents: ${contents}\nEmail Address: ${emailAddress}`;
    return `mailto:z.wu@xyrictech.com?subject=Contact Us&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <section className="bg-template-purple text-white py-20">
      <div className="container">
        <div className="sm:w-3/4 lg:w-1/2 mx-auto">
          <h1 className="text-2xl text-center mb-8">
            Stay up-to-date with the latest updates.
          </h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="focus:outline-none px-4 py-2 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="focus:outline-none px-4 py-2 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="focus:outline-none px-4 py-2 rounded-md text-black"
            />
            <textarea
              placeholder="Contents"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
              className="focus:outline-none px-4 py-2 rounded-md text-black"
              rows="4"
            />
            <a href={createMailToLink()}>
              <button
                type="button"
                className="btn bg-template-red hover:bg-template-white hover:text-black flex items-center gap-4 mt-4"
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
