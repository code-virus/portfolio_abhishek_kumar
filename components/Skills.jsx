import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const works = [
    { img: "/work1.png", video: "/work1.mp4", title: "Animation Site" },
    { img: "/work2.png", video: "/work2.mp4", title: "Fitness Site" },
    { img: "/work3.png", video: "/work3.mp4", title: "Fully Animated Site" },
    { img: "/work4.png", video: "/work4.mp4", title: "Lazarey Site" },
    { img: "/work5.png", video: "/work5.mp4", title: "Sundown Site" },
    { img: "/work6.png", video: "/work6.mp4", title: "Hair Stylish Site" },
  ];

  const [activeWork, setActiveWork] = useState(null);

  return (
    <section id="portfolio" className="bg-white text-black py-20 relative">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl mb-28 font-bold">
          My latest{" "}
          <span className="relative">
            work
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
          </span>
        </h2>
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl min-w-[70vw] mx-auto px-6">
        {works.map((work, i) => (
          <div
            key={i}
            className="overflow-hidden h-64 rounded-lg shadow-lg group cursor-pointer relative"
            onClick={() => setActiveWork(work)} // 👈 click se open
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="px-4 py-2">
              <p className="text-sm text-gray-600">{work.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Popup */}
     <AnimatePresence>
  {activeWork && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
    >
      <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden w-[80%] h-[80%]">
        {/* Close Button */}
        <button
          onClick={() => setActiveWork(null)}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full z-10"
        >
          ✕
        </button>

        {/* Video */}
        <video
          src={activeWork.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover z-0"
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 border border-gray-400 rounded-full flex items-center gap-2 hover:gap-10 duration-500">
          Show More <span className="text-2xl inline-block pb-[5px]"> →</span>
        </button>
      </div>
    </section>
  );
}
