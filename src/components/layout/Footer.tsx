const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p>
          {new Date().getFullYear()} -{" "}
          <a href="https://abclinks.vercel.app" target="_blank" rel="noopener noreferrer">
            uvacoder
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
