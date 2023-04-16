const Footer = () => {
  return (
    <footer className="bg-template-blue py-8">
      <div className="container flex items-center justify-between">
        {/* Use a nested div with flex-1 to center the text */}
        <div className="flex-1 text-center text-white">
          BMWPHD 2022-2023 Texas Christian University
        </div>
        {/* GitHub logo */}
        <div className="flex gap-10">
          <a
            href="https://github.com/Pikago-hub/BMWPHD-FE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/logo-github.svg" alt="GitHub" width="25" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
