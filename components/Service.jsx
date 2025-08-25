// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Services() {
//   useEffect(() => {
//     gsap.utils.toArray(".service-card").forEach((card, i) => {
//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: i * 0.15,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });
//   }, []);

//   const services = [
//     { num: "01", title: "Web design", desc: "Web development is the process of building, programming..." },
//     { num: "02", title: "Graphics design", desc: "Web development is the process of building, programming..." },
//     { num: "03", title: "Social media", desc: "Web development is the process of building, programming..." },
//     { num: "04", title: "App design", desc: "Web development is the process of building, programming..." },
//     { num: "05", title: "Digital marketing", desc: "Web development is the process of building, programming..." },
//     { num: "06", title: "Content writing", desc: "Web development is the process of building, programming..." },
//   ];

//   return (
//     <section id="services" className="bg-white min-h-screen text-black font-bold py-20">
//       {/* heading */}
//       <div className="text-center mb-14">
//         <h2 className="text-6xl font-bold mb-24">
//           My <span className="relative">
//             Services
//             <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
//           </span>
//         </h2>
//       </div>

//       {/* cards grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-10">
//         {services.map((service, i) => (
//           <div
//             key={i}
//             className="service-card h-64 border-2 border-gray-400 p-6 rounded-xl transition-all duration-300 hover:border-pink-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500"
//           >
//             <span className="text-black text-2xl font-bold font-medium">{service.num}</span>
//             <h3 className="text-2xl font-semibold mt-2 mb-2 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
//               {service.title}
//             </h3>
//             <p className="text-black font-bold text-sm">{service.desc}</p>
//             <button className="mt-4 text-sm flex items-center gap-2 hover:underline">
//               Read More →
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const services = [
    {
      num: "01",
      title: "Web Development",
      desc: "Building fast, responsive and modern websites using React, Tailwind CSS, and the latest technologies.",
    },
    {
      num: "02",
      title: "UI / UX Design",
      desc: "Crafting user-friendly interfaces with pixel-perfect designs and smooth animations for better engagement.",
    },
    {
      num: "03",
      title: "Responsive Design",
      desc: "Ensuring seamless experiences across all devices, from mobile phones to desktops.",
    },
    {
      num: "04",
      title: "Performance Optimization",
      desc: "Improving site speed, SEO ranking, and performance for a smooth user journey.",
    },
    {
      num: "05",
      title: "API Integration",
      desc: "Connecting applications with powerful APIs to deliver dynamic and real-time functionality.",
    },
    {
      num: "06",
      title: "Custom Solutions",
      desc: "Delivering tailored web solutions that fit perfectly with client goals and business needs.",
    },
  ];

  return (
    <section id="services" className="bg-white min-h-screen text-black py-20">
      {/* heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-24">
          My{" "}
          <span className="relative">
            Services
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
          </span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-6">
          Here’s what I can do for you as a frontend developer – from crafting
          beautiful UIs to delivering scalable and optimized web solutions.
        </p>
      </div>

      {/* cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 md:px-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card group h-72 border border-gray-200 p-8 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400"
          >
            <span className="text-gray-400 text-xl font-bold">{service.num}</span>
            <h3 className="text-2xl font-semibold mt-3 mb-3 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-white/90 leading-relaxed">
              {service.desc}
            </p>
            <button className="mt-6 text-sm font-medium flex items-center gap-2 text-pink-500 group-hover:text-white hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
