import React from "react";
import TypingAnimator from "react-typing-animator";
import "react-typing-animator/styles.css";
import myphoto from "../../assets/myphoto.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans mt-16 md:mt-24 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shashank T S
          </h2>

          {/* Typing Effect */}
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight flex items-center">
              <span className="text-white text-[24px]">I am a&nbsp;</span>
              <TypingAnimator
                textArray={[
                  "Fullstack Developer",
                  "Problem Solver",
                  "Tech Enthusiast",
                  "Coder",
                ]}
                cursorColor="#8245ec"
                textColor="#8245ec"
                fontSize="24px"
                loop={false}
                typingSpeed={60}
                delaySpeed={1000}
                backspace
                height="20px"
                dynamicDelay
                displayCursor={true}
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: "600",
                }}
              />
            </h3>
          </div>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am an aspiring full-stack developer with hands-on experience in
            building scalable web applications. My work spans both front-end and
            back-end development, with a strong foundation in Java, Spring Boot,
            React and other modern technologies to create seamless user
            experiences and efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full">
            <img
              src={myphoto}
              alt="Shashank TS"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
