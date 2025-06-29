import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/images/coconout-cocktail.png"
            alt="Coconut Cocktail Logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
          <div className="inline-flex items-center transition-all duration-300">
            <p className="tracking-normal group-hover:ml-1 group-hover:tracking-[2px] transition-all duration-300">
              ArthurFialho
            </p>
          </div>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="relative group px-2">
              <a
                href={`#${link.id}`}
                className="text-white transition-colors duration-300 group-hover:text-yellow"
              >
                {link.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
