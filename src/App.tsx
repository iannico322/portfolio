import { ThemeProvider } from "@/components/theme-provider";

import AnimatedCursor from "react-animated-cursor";
import { Outlet } from "react-router-dom";
import {
  ChevronRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
  BlendingModeIcon,
  DesktopIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import GojoProfile from "./assets/images/gojo-1.webp";
// import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

import { useEffect, useState } from "react";
import "./gradient.css";
import ProjectCard from "./components/card/card";

import image1 from "./assets/images/My Works/1.webp";
import image2 from "./assets/images/My Works/2.webp";

import image4 from "./assets/images/My Works/4.webp";
import image5 from "./assets/images/My Works/5.webp";
import image6 from "./assets/images/My Works/6.webp";
import image7 from "./assets/images/My Works/7.webp";
import profile from "./assets/images/My Works/profile.webp";

import Reveal from "./components/animation/reveal";

// import image8 from './assets/images/My Works/8.webp'
// import image9 from './assets/images/My Works/9.webp'
import image10 from "./assets/images/My Works/10.webp";

import SlideUp from "./components/animation/revealUp";
import CardSlide from "./components/animation/revealCard";
import SlideUpSkills from "./components/animation/SlideUpSkills";

function App() {
  useEffect(() => {
    localStorage.setItem("vite-ui-theme", "dark");
  }, []);

  const [projects] = useState([
    {
      link: "https://iannico322.github.io/itsy-web/",
      img: image1,
      title: "ITSY",
      languanges: ["Reactsx", "React Native", "Django", "tailwind"],
      status: "Active",
    },
    {
      link: "https://iannico322.github.io/liceo.cdo/",
      img: image2,
      title: "LICEO-CITC",
      languanges: ["HTML", "CSS", "JS"],
      status: "Active",
    },
    {
      link: "https://iannico322.github.io/umap.ustp/welcome",
      img: image5,
      title: "UMAP",
      languanges: ["React JS", "React Native", "Django", "tailwind"],
      status: "Expired Server",
    },
    {
      link: "https://iannico322.github.io/BanatHero/",
      img: image10,
      title: "BanatHero",
      languanges: ["HTML", "CSS", "JS"],
      status: "Active",
    },
    {
      link: "https://iannico322.github.io/wow2k23/",
      img: image4,
      title: "WOW-USTP",
      languanges: ["HTML", "SCSS", "JS"],
      status: "Active",
    },
    {
      link: "https://iannico322.github.io/The-Weeknd/",
      img: image6,
      title: "Weeknd Album",
      languanges: ["HTML", "SCSS", "JS"],
      status: "Active",
    }
    
  ]);

  // {
  //   link: "https://iannico322.github.io/BlackGold-Website/",
  //   img: image7,
  //   title: "Dark Gold",
  //   languanges: ["HTML", "SCSS", "JS"],
  //   status: "Active",
  // },

  return (
    <ThemeProvider>
      <div className=" box-border flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-[#dadada87]  ">
        <AnimatedCursor color="243,243,243" />

        <div className=" animate__animated animate__fadeInDown fixed z-10 flex w-full items-center justify-around border  border-b-[1px] border-accent/60 bg-background/30 py-3 backdrop-blur-md">
          <a href="#Nico" className=" flex  items-center gap-10 sm:gap-8">
            <h1 className=" font-inter text-4xl font-black leading-[30px] text-primary  sm:text-2xl sm:leading-[20px] ">
              N <span className=" ml-[2px] text-accent-foreground">I</span>{" "}
              <br /> <span>CO</span>{" "}
            </h1>
          </a>
          <nav className=" flex gap-10 text-accent-foreground sm:gap-5">
            <a
              className=" animate__animated animate__faster animate__fadeInDown animate__delay-1s underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs	"
              href="#Nico" 
            >
              Home
            </a>
            <a
              className=" animate__animated animate__faster animate__fadeInDown animate__delay-2s underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs	"
              href="#about"
            >
              About
            </a>
            <a
              className=" animate__animated animate__faster animate__fadeInDown animate__delay-3s  underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs"
              href="#Work"
            >
              Projects
            </a>
            <a
              className=" animate__animated animate__faster animate__fadeInDown animate__delay-4s underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs"
              href="/react-vite-supreme/contact"
            >
              Contact
            </a>
          </nav>
        </div>

        <Outlet />

        <div className="   absolute flex h-[120vh] w-full overflow-hidden    ">
          <div className="  gradient z-1  absolute  bottom-0 right-0 m-[15%]   "></div>
        </div>

        <div
          id="Nico"
          className="relative  box-border flex h-screen w-full flex-row items-center justify-around gap-0  overflow-hidden bg-background/0 backdrop-blur-lg  sm:flex-col sm:items-start sm:justify-around  "
        >
          <div className=" animate__animated  animate__fadeInUp animate__delay-faster absolute z-0 ">
            <img
              className=" pointer-events-none h-[900px] object-contain md:scale-[1.3] sm:bottom-0 sm:mt-[30vh] sm:h-[90vw]   "
              src={GojoProfile}
              alt=""
            />
          </div>

          <div className=" relative mt-60 flex h-[60%] flex-col gap-20  sm:ml-4  sm:mt-0 sm:h-0 sm:w-full  ">
            <div className=" flex flex-col  gap-1">
              <Reveal>
                <h1 className=" animate__animated animate__fadeInUp text-[64px]  font-semibold leading-[60px] text-accent-foreground  sm:text-[30px] sm:leading-[40px]    ">
                  Hi,
                  <br />
                  I’m{" "}
                  <button className=" text-primary backdrop-blur-lg ">
                    Nico
                  </button>{" "}
                </h1>
              </Reveal>
              <Reveal>
                <p className=" animate__animated animate__fadeInLeft animate__fast text-[24px] font-light leading-[25px] text-accent-foreground sm:text-[11px] sm:leading-[15px]">
                  Front-end Developer and UI
                  <br className=" sm:hidden" />
                  Designer
                </p>
              </Reveal>

              <Button
                size="icon"
                className=" mt-7 h-12 w-[40%] items-center   gap-1 rounded-lg bg-accent-foreground text-lg text-accent backdrop-blur-md transition-all duration-700 hover:translate-x-2 hover:bg-accent-foreground/70  active:translate-x-2 sm:mt-2 sm:h-10 sm:w-[30%] sm:text-sm "
              >
                <span className=" ml-2 mt-1">Hire Me</span>

                <ChevronRightIcon className="  h-8 w-8 text-lg text-accent hover:text-accent/90 " />
              </Button>
            </div>

            <div className=" absolute bottom-0 flex flex-col gap-5 sm:fixed sm:right-0 sm:mb-4 sm:mr-4">
              <SlideUp>
                <a href="https://github.com/iannico322" target="_blank">
                  <GitHubLogoIcon className="   animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 " />
                </a>
              </SlideUp>
              <SlideUp>
                <a
                  href="https://www.instagram.com/ianian_niconico/"
                  target="_blank"
                >
                  <InstagramLogoIcon className=" animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 " />
                </a>
              </SlideUp>
              <SlideUp>
                <a href="https://www.linkedin.com/in/ian-nico" target="_blank">
                  <LinkedInLogoIcon className="animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 " />
                </a>
              </SlideUp>
            </div>
          </div>

          <div className="relative flex min-h-[10%] flex-col justify-start gap-20  sm:ml-4 sm:mt-0   sm:min-h-0 sm:gap-1">
            <div className=" flex flex-col  gap-1">
              <p className=" animate__animated animate__fadeInUp animate__delay-.8s text-xl font-semibold text-primary  sm:text-sm">
                Explore on
              </p>
              <div className=" flex flex-col gap-8 sm:gap-2 ">
                <Reveal>
                  <h1 className="     text-[34px] font-semibold leading-[38px]  text-accent-foreground sm:text-base ">
                    Based in Cagayan de Oro <br />
                    i’m developer and <br />
                    UI/UX designer.
                  </h1>
                </Reveal>
                <SlideUp>
                  <p className=" text-[16px] font-light leading-[25px] text-accent-foreground sm:text-xs ">
                    Are you looking for a front-end developer or a designer
                      
                    <br />
                    to build your brand and grow your business?
                    <br />Let’s connect and see how I can help you"
                      
                  </p>
                </SlideUp>
              </div>

              <a
                href="./Google-Cloud-Skill-badges.pdf"
                download={true}
                className=" animate__animated animate__fadeIn animate__faster animate__delay-1s mt-7   flex w-[40%]  items-center justify-center gap-2  rounded-md bg-primary/10  py-2 font-inter  text-lg text-primary backdrop-blur-lg transition-all duration-200  hover:bg-primary/30  hover:text-accent-foreground active:translate-y-2 sm:mt-3  sm:w-[60%] sm:text-xs "
              >
                Download CV
                <DownloadIcon className=" mb-1   h-5 w-5 text-lg " />
              </a>
            </div>
          </div>
        </div>

        <div id="about" className="  relative flex min-h-0 flex-col items-center justify-center gap-20 bg-transparent    sm:mt-0  sm:w-full  ">
          <h1 className=" absolute left-0 z-0 ml-[20px] w-[90%] text-[20vw] font-bold text-primary sm:rotate-90 sm:text-[40vw]  ">
            AboutMe
          </h1>
          <div  className=" mt-[10vh]   relative box-border flex min-h-[10px] w-[90%] flex-col overflow-hidden rounded-lg bg-[#1b1b1b]/50 px-5 py-10 backdrop-blur-lg sm:min-h-0">
            <div className=" flex w-full flex-col gap-2">
              <SlideUp>
                <p className=" text-5xl font-semibold text-accent-foreground sm:text-xl">
                  About <span className=" text-primary">Nico</span>{" "}
                </p>
              </SlideUp>
              <hr className=" border border-primary" />
            </div>

            <div className=" relative  mt-10 box-border flex w-full items-center justify-center gap-20 md:flex-col sm:gap-2 ">
              <img
                className=" relative h-[350px] w-[350px]  rounded-full border-[5px] border-primary object-cover  sm:h-[250px] sm:w-[250px]"
                src={profile}
                alt=""
              />

              <div className=" w-[40%] md:w-full ">
                <SlideUp>
                  <h1 className=" pb-2 text-2xl  italic text-primary">
                    Hello Dear{" "}
                    <span className=" animate__animated animate__bounce  animate__infinite ">
                      👋
                    </span>{" "}
                  </h1>
                </SlideUp>
                <Reveal>
                  <h1 className=" min-h-0 w-full indent-10 text-lg text-accent-foreground   ">
                    {" "}
                    Hi, I’m Ian Nico Caulin, a BSIT student at USTP with a passion for web/app-development, machine learning, and design. I have experience in Python, C++, Java, PHP, HTML, CSS, JavaScript, React, Django, Figma, and React Native. I have knowledge of machine learning algorithms and used the GPT API for text, image classification and code generation.
                    <br />
                    <br /> I have earned <a href="https://www.cloudskillsboost.google/public_profiles/f9bdb4d6-5ff2-4dcc-8415-e66e0d436528" className=" font-bold">badges</a> in <a href="https://www.cloudskillsboost.google/public_profiles/f9bdb4d6-5ff2-4dcc-8415-e66e0d436528" className=" font-bold">Google Cloud</a>   for cloud computing, big data, and machine learning. I love learning new skills and collaborating with other developers. Check out some of my projects below and contact me if you have any questions or feedback.
                  </h1>
                </Reveal>
              </div>
            </div>

            <div className="   mt-3 flex min-h-[400px] w-[100%] flex-col items-center justify-center gap-4   md:mt-20 md:w-[100%]">
              <hr className=" mt-7 border-1 border-primary w-full" />
              <Reveal>
                <h1 className="  text-2xl font-semibold text-accent-foreground">
                  My Skills
                </h1>
              </Reveal>
              <hr className="  border-1 border-primary w-full" />
              <div className=" relative flex min-h-[20px]  w-full justify-around flex-row gap-5 md:flex-col md:items-center md:flex-wrap ">
                <SlideUpSkills>
                  <div className=" bg-black/40 h-full relative px-5 flex w-full    flex-col border-x-[1px] border-y-[1px]  border-border pb-5 text-center">
                    <div className=" flex flex-col items-center  justify-center gap-6">
                      <Button
                        variant="secondary"
                        className="  flex items-center justify-center "
                      >
                        <BlendingModeIcon className=" h-5 w-5 text-accent-foreground" />
                      </Button>
                      <Reveal>
                        <h1 className=" text-lg font-bold text-accent-foreground">
                          Designer
                        </h1>
                      </Reveal>
                      <SlideUp>
                        <p className=" text-center">
                          {" "}
                          I’m a designer who loves simple, clear, and interactive design.
                        </p>
                      </SlideUp>
                      <div className="  flex items-center flex-col mt-4 text-center w-ful">
                        <Reveal>
                          <p className=" text-primary">
                          Things I enjoy designing:
                          </p>
                        </Reveal>
                        <SlideUp>
                          <p className="">UX, UI, Web, Apps, Logos</p>
                        </SlideUp>
                      </div>

                      <div className="  flex items-center flex-col mt-4 text-center w-ful">
                        <Reveal>
                          <p className=" text-primary text-center">Design Tools:</p>
                        </Reveal>
                        <SlideUp>
                          <p className=" text-center">
                            Photoshop <br />
                            Figma <br />
                            Sketch <br />
                            Webflow
                          </p>
                        </SlideUp>
                      </div>
                    </div>
                  </div>
                </SlideUpSkills>


                <SlideUpSkills>
                  <div className=" flex w-full bg-black/40   px-5 flex-col border-x-[1px] border-y-[1px]  border-border pb-5 ">
                    <div className=" flex flex-col items-center  justify-center gap-6">
                      <Button
                        variant="secondary"
                        className="  flex items-center justify-center "
                      >
                        <DesktopIcon className=" h-5 w-5 text-accent-foreground" />
                      </Button>
                      <Reveal>
                        <h1 className=" text-center text-lg font-bold text-accent-foreground">
                          Frontend Developer
                        </h1>
                      </Reveal>
                      <SlideUp>
                        <p className=" text-center">
                          {" "}
                          I like to code things from scratch, and enjoy bringing
                          ideas to life in the browser
                        </p>
                      </SlideUp>
                      <div className=" flex items-center flex-col mt-4 text-center w-ful">
                        <Reveal>
                          <p className=" self-center text-center text-primary  ">
                            Tech Stack:
                          </p>
                        </Reveal>
                        <SlideUp>
                          <p className=" w-[95%] text-center ">
                            HTML | CSS, Sass, Tailwind | JS, TS | Git | React,
                            Vite, Django | Material UI, Shadcn{" "}
                          </p>
                        </SlideUp>
                      </div>

                      <div className="  flex items-center flex-col mt-4 text-center w-ful">
                        <Reveal>
                          <p className=" text-center text-primary">
                            Dev Tools:
                          </p>
                        </Reveal>
                        <SlideUp>
                          <p className=" text-center">
                            VSCode <br />
                            Bitbucket <br />
                            Bootstrap <br />
                            Git <br />
                            Github <br />
                            VSCode
                          </p>
                        </SlideUp>
                      </div>
                    </div>
                  </div>
                </SlideUpSkills>
                
                <SlideUpSkills>
                  <div className=" flex px-5 w-full text-center bg-black/40   flex-col border-x-[1px] border-y-[1px]  border-border items-center justify-center pb-5">
                    <div className=" flex flex-col items-center text-center  justify-center gap-6">
                      <Button
                        variant="secondary"
                        className="  flex items-center justify-center "
                      >
                        <GearIcon className=" h-5 w-5 text-accent-foreground" />
                      </Button>
                      <Reveal>
                        <h1 className=" text-lg font-bold text-accent-foreground">
                          Machine Learning
                        </h1>
                      </Reveal>
                      <SlideUp>
                        <p className=" text-center">
                          {" "}
                          I have a passion for data analysis and using it to create innovative solutions
                        </p>
                      </SlideUp>
                      <div className=" flex items-center flex-col mt-4 text-center w-ful">
                        <Reveal>
                          <p className="   text-primary">
                            ML Stack:
                          </p>
                        </Reveal>
                        <SlideUp>
                          <p>Python TensorFlow | PyTorch | Scikit-learn | GPT API | Google Cloud</p>
                        </SlideUp>
                      </div>

                      <div className="  flex items-center flex-col mt-4 text-center w-ful">
                        <Reveal>
                          <p className=" text-primary">ML Tools:</p>
                        </Reveal>
                        <SlideUp>
                          <p className=" text-center">
                          
                          Kaggle <br />
                          VS Code
                          </p>
                        </SlideUp>
                      </div>
                    </div>
                  </div>
                </SlideUpSkills>


              </div>
            </div>
          </div>
        </div>

        {/* Work */}
        <div
          id="Work"
          className=" relative mb-[70px] box-border flex  min-h-[50vh] w-full flex-grow flex-col flex-wrap   items-center  justify-center gap-10  justify-self-center bg-background/0 backdrop-blur-lg   "
        >
          <Reveal>
            <h1 className=" relative top-0 mt-[10vh] text-4xl text-accent-foreground">
              My <span className=" font-bold text-primary">Works</span>{" "}
            </h1>
          </Reveal>
          <div className=" relative box-border flex  min-h-[50vh] w-[80%] flex-grow flex-row flex-wrap items-center   justify-center  gap-10 justify-self-center  bg-background/0 backdrop-blur-lg md:w-full  ">
            {projects
              ? projects.map((e: any) => (
                  <CardSlide>
                    <ProjectCard
                      link={e.link}
                      img={e.img}
                      title={e.title}
                      languanges={e.languanges}
                      status={e.status}
                    />
                  </CardSlide>
                ))
              : ""}
          </div>
          <SlideUp>
            <a
              href="https://github.com/iannico322"
              target="_blank"
              className=" flex items-center gap-3 rounded-lg border border-accent-foreground px-5 py-2 text-accent-foreground/80 hover:text-accent-foreground/75"
            >
              {" "}
              <GitHubLogoIcon className="   animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-6  w-6 text-lg text-accent-foreground hover:text-accent-foreground/70  " />{" "}
              View More in Github
            </a>
          </SlideUp>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
