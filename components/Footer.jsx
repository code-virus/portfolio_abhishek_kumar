export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 md:px-[12vw]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        
        {/* Left Side */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3">
            Abhis<span className="text-pink-500">hek</span>.
          </h1>
          <p className="mb-2 text-gray-400 text-sm leading-relaxed w-[35vw]">
  I am a passionate Frontend Developer eager to kickstart my professional 
  journey in web development. I have built multiple projects using 
  <span className="text-pink-500"> React</span>, 
  <span className="text-orange-400"> Tailwind CSS</span> and modern 
  JavaScript, focusing on creating clean, responsive and user-friendly designs.
</p>
        </div>

        {/* Right Side (Subscribe Box) */}
        <div className="flex items-center bg-zinc-200 rounded-full overflow-hidden w-full md:w-auto shadow-md">
          <span className="px-4 text-gray-400">
            <i className="fas fa-user"></i>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-2 py-3 bg-zinc-200 outline-none text-gray-500 w-full md:w-72 placeholder-gray-400 text-sm"
          />
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-3 text-white font-medium text-sm">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 " />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 gap-4">
        <p>© 2025 Abhishek kumar. All rights reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-pink-500">Term of Services</a>
          <a href="#" className="hover:text-pink-500">Privacy Policy</a>
          <a href="#contact" className="hover:text-pink-500">Connect with me</a>
        </div>
      </div>
    </footer>
  );
}
