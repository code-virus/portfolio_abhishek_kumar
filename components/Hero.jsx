import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutMe() {
  useEffect(() => {
    // Animate progress bars
    gsap.fromTo(
      ".skill-bar-fill",
      { width: "0%" },
      {
        width: (i, target) => target.getAttribute("data-width"),
        duration: 2,
        ease: "power3.out",
        stagger: 0.3,
      }
    );

    // Stats hover effect
    gsap.utils.toArray(".stat-box").forEach((box) => {
      box.addEventListener("mouseenter", () => {
        gsap.to(box, { y: -12, duration: 0.4, ease: "power3.out" });
      });
      box.addEventListener("mouseleave", () => {
        gsap.to(box, { y: 0, duration: 0.4, ease: "power3.out" });
      });
    });
  }, []);

  return (
    <section id="about" className="bg-white min-h-screen text-black py-20 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold ml-[15vw] text-center mb-16">
        About{" "}
        <span className="relative text-white">
          me
          <span className="absolute -bottom-2 left-0 w-full h-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"></span>
        </span>
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row px-[9vw] items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="flex-1 flex justify-start ">
          <img
            src="/profile.png"
            alt="profile"
            className="rounded-lg shadow-lg w-72 md:w-80"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1">
         <p className="mb-6 text-gray-700 leading-relaxed w-[50vw]">
  I am a passionate Frontend Developer eager to kickstart my professional 
  journey in web development. I have built multiple projects using 
  <span className="text-pink-500"> React</span>, 
  <span className="text-orange-400"> Tailwind CSS</span> and modern 
  JavaScript, focusing on creating clean, responsive and user-friendly designs.
</p>
<p className="mb-10 text-gray-700 leading-relaxed">
  As a fresher, I am highly motivated to learn, adapt, and contribute to 
  real-world projects. My dedication, curiosity, and enthusiasm drive me 
  to constantly improve my skills and deliver meaningful digital experiences.
</p>


          {/* Skills */}
          <div className="space-y-6 ">
            {[
              { name: "HTML & CSS", width: "95%" },
              { name: "React JS", width: "78%" },
              { name: "JavaScript", width: "85%" },
              { name: "Tailwind", width: "90%" },
              { name: "Gsap", width: "80%" },
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-10 hover:scale-[1.14] cursor-pointer duration-300">
                <div className=" justify-between flex w-[6vw] mb-1 ">
                  <p>{skill.name}</p>
                </div>
                <div className="w-full h-2  rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                    data-width={skill.width}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 flex flex-col md:flex-row justify-around text-center gap-12">
        {[
          { value: "3+", label: "YEARS OF EXPERIENCE" },
          { value: "56+", label: "PROJECTS COMPLETED" },
          { value: "12+", label: "HAPPY CLIENTS" },
        ].map((stat, i) => (
          <div key={i} className="stat-box">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="mt-2 text-gray-500 uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
