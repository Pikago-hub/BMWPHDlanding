import Head from "next/head";
import Contact from "../components/contact";
import Team from "../components/team";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BMWPHD Landing Page</title>
        <link rel="icon" href="/img/racinghorse.png" />
        <meta
          name="description"
          content="A Next.js company landing page for BMWPHD"
        />
      </Head>
      <div className="font-Poppins bg-gray-100">
        {" "}
        {/* Set the background color here */}
        {/* Header */}
        <header>
          <Navbar />
        </header>
        {/* Main Section */}
        <Hero />
        <Team />
        <FAQ />
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
