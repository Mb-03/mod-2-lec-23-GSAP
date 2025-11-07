import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("nav", {
      backgroundColor: "rgba(0,0,0,0.8)",
      backdropFilter: "blur(12px)",
      padding: "12px 0",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",

      scrollTrigger: {
        trigger: document.body,
        start: "100px top",
        end: "200px top",
        scrub: 0.5,
        markers: true,
      },
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 py-5 max-w-7xl mx-auto px-4">
        <a className="flex items-center gap-2" href="/">
          <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />
          <p className="font-modern-negra text-3xl -mb-2">Velvet Pour</p>
        </a>
        <ul className="flex justify-center items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-gray-300  transition"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
