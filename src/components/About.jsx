import React from "react";

// import image
import Image from "../assets/img/about.webp";
import about from "../assets/img/about2.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={about}
            alt=""
          />
          <div
            className="flex flex-col items-center text-center lg:items-start 
          lg:text-left"
          >
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:text-4xl font-medium 
              lg:font-extrabold mb-3 before:content-about relative 
              before:absolute before:opacity-40 before:-top-[2rem] 
              before:hidden before:lg:block"
              >
                Julian Re
              </h2>
              <p className="mb-4 text-accent">Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I was studying economics but really what i love was programming,
                mainly web developer. So currently i am self-taught and giving
                my all to web development
                <br />I have 1 year of experience at the moment doing projects
                an learning different things every day.
              </p>
            </div>
            <form action="#contact">
              <button
                className="btn btn-md bg-accent hover:bg-accent-hover transition-all"
                href="#Contact"
              >
                Contact me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
