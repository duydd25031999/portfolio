import React from "react";

const Footer: React.FC = () => {
  const [scrolltopClass, setScrolltopClass] = React.useState<string>('scrolltop');
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 560) {
        setScrolltopClass('scrolltop show-scroll')
    } else {
        setScrolltopClass('scrolltop')
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer id="footer">
      <a href="#" className={scrolltopClass} id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>
    </footer>
  );
};

export default Footer;
