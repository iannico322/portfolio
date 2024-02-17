import { ThemeProvider } from "@/components/theme-provider"

import AnimatedCursor from "react-animated-cursor"

import { Link, Outlet } from "react-router-dom";
import { ChevronRightIcon, GitHubLogoIcon,InstagramLogoIcon,LinkedInLogoIcon,DownloadIcon } from '@radix-ui/react-icons'
import GojoProfile from "./assets/images/gojo-1.webp"
// import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

import { useEffect } from "react";
import './gradient.css'
import ProjectCard from "./components/card/card";
function App() {

  useEffect(()=>{
    localStorage.setItem("vite-ui-theme","dark")
  },[])
 

  return (
      <ThemeProvider>
     
      <div className=" text-[#dadada87] flex flex-col bg-background min-h-screen w-full overflow-x-hidden box-border  ">

      <AnimatedCursor
      color='243,243,243'
     
      
    />
    
       
        <div className="  fixed border border-b-[1px] border-accent/60 flex justify-around items-center w-full py-3  animate__animated animate__fadeInDown bg-background/30 backdrop-blur-md z-10">
          <a href="#Nico" className=" flex  items-center gap-10 sm:gap-8">
            <h1 className=" text-primary text-4xl font-inter font-black leading-[30px] sm:leading-[20px] sm:text-2xl ">
              N <span className=" text-accent-foreground ml-[2px]">I</span> <br />{" "}
              <span>CO</span>{" "}
            </h1>
          </a>

          <nav className=" text-accent-foreground flex gap-10 sm:gap-5">
            <a className=" hover:underline hover:text-primary hover:decoration-primary/40 ease-out transition-all duration-200 sm:text-xs underline-offset-4 animate__animated animate__faster animate__fadeInDown animate__delay-1s	" href="/react-vite-supreme/page2">About</a>
            <a className=" hover:underline hover:text-primary hover:decoration-primary/40 sm:text-xs  underline-offset-4 ease-out transition-all duration-200 animate__animated animate__faster animate__fadeInDown animate__delay-2s" href="#Work">Work</a>
            <a className=" hover:underline hover:text-primary hover:decoration-primary/40 sm:text-xs underline-offset-4 ease-out transition-all duration-200 animate__animated animate__faster animate__fadeInDown animate__delay-3s" href="/react-vite-supreme/contact">Contact</a>
          </nav>
        </div>


        

        <Outlet />

      

        <div className="   flex absolute h-[120vh] w-full overflow-hidden    ">
<div className= "  absolute gradient  z-1  bottom-0 right-0 m-[15%]   "></div>
</div>


<div id="Nico" className="relative h-screen w-full bg-background/0 backdrop-blur-lg flex justify-around items-center overflow-hidden  ">


  <div className=" absolute  z-0 animate__animated animate__jackInTheBox animate__delay-1s ">
    
    
    <img
      className=" md:scale-[1.3] pointer-events-none object-contain h-[1000px] sm:h-[90vw] sm:bottom-0 sm:mt-[30vh]   "
      src={GojoProfile}
      alt=""
    />
  </div>

  

  <div className=" relative flex h-[60%] flex-col sm:justify-end gap-20  sm:w-full sm:ml-4 mt-60 ">
    <div className=" flex flex-col  gap-1">
      <h1 className=" text-accent-foreground font-semibold text-[64px]  leading-[60px] sm:text-[30px] sm:leading-[40px]  animate__animated animate__fadeInUp    ">
        Hi,
        <br />
        I’m{" "}
        <span className=" text-primary/80 backdrop-blur-lg ">
          Nico
        </span>{" "}
      </h1>
      <p className=" text-accent-foreground text-[24px] font-light leading-[25px] animate__animated animate__fadeInLeft animate__fast sm:text-[11px] sm:leading-[15px]">
        Front-end Developer and UI <br className=" sm:hidden" /> Designer
      </p>
      <Button
        size="icon"
        className=" active:translate-x-2 hover:translate-x-2 transition-all duration-700   h-12 sm:h-10 sm:text-sm mt-7 sm:mt-2 items-center text-lg hover:bg-accent-foreground/70 bg-accent-foreground backdrop-blur-md  text-accent sm:w-[30%] w-[40%] gap-1 rounded-lg "
      >
       <span className=" mt-1 ml-2">Hire Me</span> 

        <ChevronRightIcon className="  hover:text-accent/90 text-lg text-accent h-8 w-8 "/>
       
      </Button>
    </div>
    <div className=" absolute sm:fixed sm:mb-4 bottom-0 flex flex-col sm:right-0 sm:mr-4 gap-5">
      <a href="https://github.com/iannico322" target="_blank" >
        <GitHubLogoIcon  className="   animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/70  text-lg text-accent-foreground h-8 w-8 " />
      </a>
      <a href="https://www.instagram.com/ianian_niconico/" target="_blank">
        <InstagramLogoIcon className=" animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/70  text-lg text-accent-foreground h-8 w-8 " />
      </a>
      <a href="https://www.linkedin.com/in/ian-nico" target="_blank" >
        <LinkedInLogoIcon className="animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/70  text-lg text-accent-foreground h-8 w-8 " />
      </a>
      
    </div>
  </div>


  

  <div className=" relative sm:absolute  flex h-[60%] flex-col justify-start gap-20 sm:gap-1 sm:right-0 mr-5 ">
    <div className=" flex flex-col  gap-1">
      <p className=" font-semibold text-xl text-primary animate__animated animate__fadeInUp animate__delay-.8s  sm:text-sm">Explore on</p>
      <div className=" flex flex-col gap-8 sm:gap-2 ">
        <h1 className="  animate__animated animate__fadeInUp animate__delay-.5s   text-accent-foreground font-semibold text-[34px]  leading-[38px] sm:text-base ">
          Based in Cagayan de Oro <br />
          i’m developer and <br />
          UI/UX designer.
        </h1>
        <p className=" animate__animated animate__fadeInRight animate__delay-1s  text-accent-foreground text-[16px] font-light leading-[25px] sm:text-xs ">
          Hey are looking for a Front-end or Designer <br /> to build your
          brand and grow you business?
          <br />
          let’s shake hands with me.
        </p>

      </div>

      <a href="./Google-Cloud-Skill-badges.pdf" download={true}
       
        className=" active:translate-y-2 animate__animated animate__fadeIn animate__delay-1s   hover:bg-primary/30 backdrop-blur-lg  hover:text-accent-foreground transition-all duration-200 font-inter  mt-7 sm:mt-3  text-lg flex items-center justify-center gap-2  sm:text-xs  text-primary w-[40%] sm:w-[60%]  rounded-md py-2 "
      >
        Download CV
        <DownloadIcon className=" mb-1   text-lg h-5 w-5 "/>
      </a>
      
    </div>
  </div>
</div>

<div id="Work" className=" flex flex-row relative justify-center  min-h-[50vh] w-full bg-background/0 backdrop-blur-lg items-center   box-border  gap-10 justify-self-center flex-wrap overflow-hidden my-[70px]  ">

  <ProjectCard/>
  <ProjectCard/>
  <ProjectCard/>
  <ProjectCard/>
</div>

</div>
        

        </ThemeProvider>
      
  );
}



export default App
