





// import { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import Connect from "./popup";

// export default function Navbar() {
//   const [active, setActive] = useState("home");
//   const [showPopup, setShowPopup] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About Me" },
//     { id: "services", label: "Services" },
//     { id: "portfolio", label: "Portfolio" },
//     { id: "contact", label: "Contact" },
//   ];

//   useEffect(() => {
//     gsap.fromTo(
//       ".active-underline",
//       { width: 0 },
//       { width: "100%", duration: 0.5, ease: "power2.out" }
//     );
//   }, [active]);

//   // Animate mobile menu open/close
//   useEffect(() => {
//     if (menuOpen) {
//       gsap.fromTo(
//         ".mobile-menu",
//         { x: "100%", opacity: 0 },
//         { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
//       );

//       gsap.fromTo(
//         ".mobile-link",
//         { x: 50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           stagger: 0.1,
//           duration: 0.5,
//           ease: "power3.out",
//           delay: 0.2,
//         }
//       );
//     }
//   }, [menuOpen]);

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-6 md:px-12 py-6 relative">
//         <h1 className="text-2xl md:text-3xl font-extrabold">
//           Abhis<span className="text-pink-500">hek</span>.
//         </h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-base">
//           {links.map((link) => (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               onClick={() => setActive(link.id)}
//               className={`relative cursor-pointer transition ${
//                 active === link.id
//                   ? "text-pink-500 font-bold"
//                   : "hover:text-pink-400"
//               }`}
//             >
//               {link.label}
//               {active === link.id && (
//                 <span className="active-underline absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></span>
//               )}
//             </a>
//           ))}
//         </nav>

//         {/* CTA (Desktop Only) */}
//         <button
//           onClick={() => setShowPopup(true)}
//           className="hidden md:block bg-gradient-to-r from-pink-500 to-orange-500 px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base cursor-pointer"
//         >
//           Connect With Me
//         </button>

//         {/* Hamburger Menu (Mobile Only) */}
//         <button
//           className="md:hidden text-3xl z-50 relative"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✖️" : "☰"}
//         </button>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}

//       {/* Mobile Side Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-8 flex flex-col space-y-6 z-50 mobile-menu ${
//           menuOpen ? "block" : "hidden"
//         }`}
//       >
//         {links.map((link) => (
//           <a
//             key={link.id}
//             href={`#${link.id}`}
//             onClick={() => {
//               setActive(link.id);
//               setMenuOpen(false);
//             }}
//             className={`text-lg font-medium mobile-link ${
//               active === link.id ? "text-pink-500" : "text-gray-700"
//             }`}
//           >
//             {link.label}
//           </a>
//         ))}
//         <button
//           onClick={() => {
//             setShowPopup(true);
//             setMenuOpen(false);
//           }}
//           className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-full text-sm text-white"
//         >
//           Connect With Me
//         </button>
//       </div>

//       {/* Hero Section */}
//       <main className="flex flex-col items-center justify-center text-center flex-grow px-4">
//         <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 hover:scale-110 duration-300 transition cursor-pointer rounded-full overflow-hidden border-4 border-gray-700 shadow-xl mb-6">
//           <img
//             src="/Untitled (1).png"
//             alt="profile"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
//           I'm <span className="text-pink-500">Abhishek Kumar</span>, frontend
//           developer <br className="hidden md:block" /> based in{" "}
//           <span className="text-orange-400">India.</span>
//         </h2>

//         <p className="text-gray-400 mt-4 md:mt-6 max-w-lg md:max-w-2xl text-sm md:text-base">
//           I am a frontend developer from Jaipur, India with 3 years of
//           experience in multiple Project like Microsoft, Tesla and Apple.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 mt-8">
//           <button
//             onClick={() => setShowPopup(true)}
//             className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-sm md:text-base cursor-pointer"
//           >
//             Connect with me
//           </button>
//           <a href="/Abhishek Kumar-1.pdf" download>
//             <button className="border border-gray-400 px-6 py-3 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition cursor-pointer">
//               My resume
//             </button>
//           </a>
//         </div>
//       </main>

//       {/* Popup */}
//       {showPopup && <Connect onClose={() => setShowPopup(false)} />}
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Connect from "./popup";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  // Active underline animation
  useEffect(() => {
    gsap.fromTo(
      ".active-underline",
      { width: 0 },
      { width: "100%", duration: 0.5, ease: "power2.out" }
    );
  }, [active]);

  // Mobile menu animation
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        ".mobile-link",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, [menuOpen]);

  // Navbar blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        gsap.to(".navbar", {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        setScrolled(false);
        gsap.to(".navbar", {
          backdropFilter: "blur(0px)",
          backgroundColor: "transparent",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Navbar */}
      <header
        className={`navbar fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition`}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold">
          Abhis<span className="text-pink-500">hek</span>.
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-base">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`relative cursor-pointer transition ${
                active === link.id
                  ? "text-pink-500 font-bold"
                  : "hover:text-pink-400"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="active-underline absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => setShowPopup(true)}
          className="hidden md:block bg-gradient-to-r from-pink-500 to-orange-500 px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base cursor-pointer"
        >
          Connect With Me
        </button>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-3xl z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖️" : "☰"}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-8 flex flex-col space-y-6 z-50 mobile-menu ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              setActive(link.id);
              setMenuOpen(false);
            }}
            className={`text-lg font-medium mobile-link ${
              active === link.id ? "text-pink-500" : "text-gray-700"
            }`}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            setShowPopup(true);
            setMenuOpen(false);
          }}
          className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-full text-sm text-white"
        >
          Connect With Me
        </button>
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center flex-grow px-4 mt-32">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 hover:scale-110 duration-300 transition cursor-pointer rounded-full overflow-hidden border-4 border-gray-700 shadow-xl mb-6">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
          I'm <span className="text-pink-500">Abhishek Kumar</span>, a passionate 
  frontend <br className="hidden md:block" /> developer based in{" "}
          <span className="text-orange-400">India.</span>
        </h2>

       <p className="text-gray-400 mt-4 md:mt-6 max-w-lg md:max-w-2xl text-sm md:text-base">
  I am a fresher frontend developer with strong skills in <span className="text-pink-500">React</span>, 
  <span className="text-orange-400"> Tailwind CSS</span> and modern JavaScript.  
  I love creating responsive, animated and user-friendly websites.  
  Currently, I am looking for opportunities to grow my career and 
  contribute to exciting projects.
</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-sm md:text-base cursor-pointer"
          >
            Connect with me
          </button>
          <a href="/Abhishek Kumar-1.pdf" download>
            <button className="border border-gray-400 px-6 py-3 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition cursor-pointer">
              My resume
            </button>
          </a>
        </div>
      </main>

      {/* Popup */}
      {showPopup && <Connect onClose={() => setShowPopup(false)} />}
    </div>
  );
}
