import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
      },
    });

    gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="contact" className="bg-white text-black overflow-hidden py-20">
      <div className="max-w-[70vw] mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left side */}
        <div ref={leftRef}>
          <h2 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              Let's talk
            </span>
          </h2>
          <p className="text-gray-800 mb-8">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span>abhikumar902453@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span>+756-879-4781</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span>Jaipur, Rajasthan</span>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div ref={rightRef}>
          <h2 className="text-5xl font-bold mb-8">
            Get in{" "}
            <span className="relative">
              touch
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
            </span>
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded bg-zinc-100 text-white outline-none"
              />
            </div>
            <div>
              <label className="block mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded bg-zinc-100 text-white outline-none"
              />
            </div>
            <div>
              <label className="block mb-2">Write your message here</label>
              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full px-4 py-3 rounded bg-zinc-100 text-white outline-none resize-none"
              ></textarea>
            </div>

            {/* Captcha dummy */}
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <span>I am human</span>
            </div>

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium hover:opacity-90 transition"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
