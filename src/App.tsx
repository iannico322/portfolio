import { ThemeProvider } from "@/components/theme-provider";

import AnimatedCursor from "react-animated-cursor";

import { Outlet } from "react-router-dom";
import {
  ChevronRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import GojoProfile from "./assets/images/gojo-1.webp";
// import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

import { useEffect, useState } from "react";
import "./gradient.css";
import ProjectCard from "./components/card/card";


import image1 from './assets/images/My Works/1.webp'
import image2 from './assets/images/My Works/2.webp'
import image3 from './assets/images/My Works/3.webp'
import image4 from './assets/images/My Works/4.webp'
import image5 from './assets/images/My Works/5.webp'
import image6 from './assets/images/My Works/6.webp'
import image7 from './assets/images/My Works/7.webp'
import image8 from './assets/images/My Works/8.webp'
import image9 from './assets/images/My Works/9.webp'
import image10 from './assets/images/My Works/10.webp'








function App() {
  useEffect(() => {
    localStorage.setItem("vite-ui-theme", "dark");
  }, []);


  const [projects] = useState([
    {
    img:image1,title:"ITSY",languanges:["Reactsx","React Native","Django","tailwind"],dateDeploy:"12-20-23"
  },
  {
    img:image2,title:"LICEO-CITC",languanges:["HTML","CSS","JS"],dateDeploy:"unknown"
  },
  {
    img:image5,title:"UMAP",languanges:["React JS","React Native","Django","tailwind",],dateDeploy:"unknown"
  },
  {
    img:image3,title:"PH-Wonders",languanges:["HTML","CSS","JS"],dateDeploy:"unknown"
  },
  {
    img:image4,title:"WOW-USTP",languanges:["HTML","SCSS","JS"],dateDeploy:"unknown"
  }
  ,
  {
    img:image6,title:"Weeknd Album",languanges:["HTML","SCSS","JS"],dateDeploy:"unknown"
  }
  ,
  {
    img:image7,title:"Dark Gold",languanges:["HTML","SCSS","JS"],dateDeploy:"unknown"
  }
])

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
              href="/react-vite-supreme/page2"
            >
              About
            </a>
            <a
              className=" animate__animated animate__faster animate__fadeInDown animate__delay-2s  underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs"
              href="#Work"
            >
              Work
            </a>
            <a
              className=" animate__animated animate__faster animate__fadeInDown animate__delay-3s underline-offset-4 transition-all duration-200 ease-out hover:text-primary hover:underline hover:decoration-primary/40 sm:text-xs"
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
          <div className=" animate__animated  animate__jackInTheBox animate__delay-1s absolute z-0 ">
            <img
              className=" pointer-events-none h-[900px] object-contain md:scale-[1.3] sm:bottom-0 sm:mt-[30vh] sm:h-[90vw]   "
              src={GojoProfile}
              alt=""
            />
          </div>

          <div className=" relative mt-60 flex h-[60%] flex-col gap-20  sm:ml-4  sm:mt-0 sm:h-0 sm:w-full  ">
            <div className=" flex flex-col  gap-1">
              <h1 className=" animate__animated animate__fadeInUp text-[64px]  font-semibold leading-[60px] text-accent-foreground  sm:text-[30px] sm:leading-[40px]    ">
                Hi,
                <br />
                I’m{" "}
                <button className=" text-primary backdrop-blur-lg ">
                  Nico
                </button>{" "}
              </h1>
              <p className=" animate__animated animate__fadeInLeft animate__fast text-[24px] font-light leading-[25px] text-accent-foreground sm:text-[11px] sm:leading-[15px]">
                Front-end Developer and UI <br className=" sm:hidden" />{" "}
                Designer
              </p>
              <Button
                size="icon"
                className=" mt-7 h-12 w-[40%] items-center   gap-1 rounded-lg bg-accent-foreground text-lg text-accent backdrop-blur-md transition-all duration-700 hover:translate-x-2 hover:bg-accent-foreground/70  active:translate-x-2 sm:mt-2 sm:h-10 sm:w-[30%] sm:text-sm "
              >
                <span className=" ml-2 mt-1">Hire Me</span>

                <ChevronRightIcon className="  h-8 w-8 text-lg text-accent hover:text-accent/90 " />
              </Button>
            </div>
            <div className=" absolute bottom-0 flex flex-col gap-5 sm:fixed sm:right-0 sm:mb-4 sm:mr-4">
              <a href="https://github.com/iannico322" target="_blank">
                <GitHubLogoIcon className="   animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 " />
              </a>
              <a
                href="https://www.instagram.com/ianian_niconico/"
                target="_blank"
              >
                <InstagramLogoIcon className=" animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 " />
              </a>
              <a href="https://www.linkedin.com/in/ian-nico" target="_blank">
                <LinkedInLogoIcon className="animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-8  w-8 text-lg text-accent-foreground hover:text-accent-foreground/70 " />
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[10%] flex-col justify-start gap-20  sm:ml-4 sm:mt-0   sm:min-h-0 sm:gap-1">
            <div className=" flex flex-col  gap-1">
              <p className=" animate__animated animate__fadeInUp animate__delay-.8s text-xl font-semibold text-primary  sm:text-sm">
                Explore on
              </p>
              <div className=" flex flex-col gap-8 sm:gap-2 ">
                <h1 className="  animate__animated animate__fadeInUp animate__delay-.5s   text-[34px] font-semibold leading-[38px]  text-accent-foreground sm:text-base ">
                  Based in Cagayan de Oro <br />
                  i’m developer and <br />
                  UI/UX designer.
                </h1>
                <p className=" animate__animated animate__fadeInRight animate__delay-1s  text-[16px] font-light leading-[25px] text-accent-foreground sm:text-xs ">
                  Hey are looking for a Front-end or Designer <br /> to build
                  your brand and grow you business?
                  <br />
                  let’s shake hands with me.
                </p>
              </div>

              <a
                href="./Google-Cloud-Skill-badges.pdf"
                download={true}
                className=" animate__animated animate__fadeIn animate__delay-1s mt-7   flex w-[40%]  items-center justify-center bg-primary/10  gap-2 rounded-md  py-2 font-inter  text-lg text-primary backdrop-blur-lg transition-all duration-200  hover:bg-primary/30  hover:text-accent-foreground active:translate-y-2 sm:mt-3  sm:w-[60%] sm:text-xs "
              >
                Download CV
                <DownloadIcon className=" mb-1   h-5 w-5 text-lg " />
              </a>
            </div>
          </div>
        </div>

        <div
          id="Work"
          className=" relative mb-[70px] box-border flex  min-h-[50vh] w-full flex-col flex-wrap items-center   justify-center  gap-10 justify-self-center  bg-background/0 backdrop-blur-lg flex-grow   "
        >

          <h1 className=" relative top-0 text-4xl mt-[10vh] text-accent-foreground">My <span className=" text-primary font-bold">Works</span> </h1>
          <div className=" relative box-border flex  min-h-[50vh] w-[80%] md:w-full flex-row flex-wrap items-center   justify-center  gap-10 justify-self-center  bg-background/0 backdrop-blur-lg flex-grow  ">

          {projects?projects.map((e:any)=>(
            <ProjectCard 
            link="bit.ly/ITSY"
            img={e.img}
            title={e.title}
            languanges={e.languanges}
            dateDeploy={e.dateDeploy}
            />
          )):""}

            
          </div>

          <a href="https://github.com/iannico322" target="_blank" className=" flex items-center gap-3 text-accent-foreground/80 border border-accent-foreground rounded-lg px-5 py-2 hover:text-accent-foreground/75"> <GitHubLogoIcon className="   animate__animated animate__fadeInUp animate__faster animate__delay-.9s h-6  w-6 text-lg text-accent-foreground hover:text-accent-foreground/70  " /> View More in Github</a>


        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
