import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Connect({ onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-zinc-600 bg-opacity-60 z-50"
      onClick={onClose} // overlay click close
    >
         <section className="bg-black rounded-[.6vw] text-white text-center py-20 w-[90vw]"  ref={popupRef}
     onClick={(e) => e.stopPropagation()}> 
       <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-white w-8 h-8 rounded-full hover:text-red-500 text-lg font-bold"
        >
          ✕
        </button>
      <h2 className="text-4xl font-bold mb-6">
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Connect With Me
        </span>
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        I’m open to new opportunities, collaborations, and exciting projects. 
        Let’s connect and build something amazing together 🚀
      </p>
      
      <div className="flex justify-center gap-6 text-xl">
        <a href="https://www.linkedin.com/in/abhishek-kumar-124a1b2b7/" target="_blank" className="hover:text-pink-500">🔗 LinkedIn</a>
        <a href="https://github.com/code-virus" target="_blank" className="hover:text-pink-500">🖥️ GitHub</a>
        <a href="mailto:abhikumar902453@gmail.com" className="hover:text-pink-500">📧 Email</a>
      </div>

      <div className="mt-10">
        <a
          href="/resume.pdf"
          className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium hover:scale-105 transition inline-block"
        >
          Download Resume
        </a>
      </div>
      <button
          onClick={onClose}
          className="bg-white mt-6 hover:border-l-pink-500 hover:border-t-pink-400 hover:border-r-orange-400 duration-800 transition hover:border-b-pink-400 border-2 text-black px-8 py-2 rounded-full "
        >
          Close
        </button>
    </section>
     
    </div>
    

   
  );
}
