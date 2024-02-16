import { ThemeProvider } from "@/components/theme-provider"



import { Link, Outlet } from "react-router-dom";
import { ChevronRightIcon, GitHubLogoIcon,InstagramLogoIcon,LinkedInLogoIcon,DownloadIcon } from '@radix-ui/react-icons'
import GojoProfile from "./assets/images/gojo-1.webp"
// import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

import { useEffect } from "react";
import './gradient.css'
function App() {

  useEffect(()=>{
    localStorage.setItem("vite-ui-theme","dark")
  },[])


  return (
      <ThemeProvider>
      <div className=" flex flex-col bg-background min-h-screen w-full overflow-x-hidden box-border  ">

      
       
        <div className="  fixed border border-b-2 border-accent flex justify-around items-center w-full py-3  animate__animated animate__fadeInDown bg-background/30 backdrop-blur-md z-10">
          <Link to="/react-vite-supreme" className=" flex  items-center gap-10">
            <h1 className=" text-primary text-4xl font-inter font-black leading-[30px] ">
              N <span className=" text-accent-foreground ml-[2px]">I</span> <br />{" "}
              <span>CO</span>{" "}
            </h1>
          </Link>

          <nav className=" text-accent-foreground flex gap-10">
            <a className=" hover:underline hover:text-primary hover:decoration-primary/40 ease-out transition-all duration-200 underline-offset-4 animate__animated animate__faster animate__fadeInDown animate__delay-1s	" href="/react-vite-supreme/page2">About</a>
            <a className=" hover:underline hover:text-primary hover:decoration-primary/40  underline-offset-4 ease-out transition-all duration-200 animate__animated animate__faster animate__fadeInDown animate__delay-2s" href="/react-vite-supreme/contact">Work</a>
            <a className=" hover:underline hover:text-primary hover:decoration-primary/40 underline-offset-4 ease-out transition-all duration-200 animate__animated animate__faster animate__fadeInDown animate__delay-3s" href="/react-vite-supreme/contact">Contact</a>
          </nav>
        </div>


        

        <Outlet />

      
<div className=" absolute h-screen w-full overflow-hidden  ">
<div className= " fixed gradient  z-1  bottom-0 right-0 m-[10%]  "></div>
</div>



<div className="relative h-screen w-full bg-background/10 backdrop-blur-lg flex justify-around items-center overflow-hidden  ">


  <div className=" absolute  z-0 animate__animated animate__fast  animate__fadeIn ">
    
    
    <img
      className=" md:scale-[1.3] pointer-events-none object-contain h-[1000px] animate-float "
      src={GojoProfile}
      alt=""
    />
  </div>

  

  <div className=" relative flex h-[60%] flex-col justify-start gap-20">
    <div className=" flex flex-col  gap-1">
      <h1 className=" text-accent-foreground font-semibold text-[64px]  leading-[60px]  animate__animated animate__fadeInUp    ">
        Hi,
        <br />
        I’m{" "}
        <span className=" text-primary/80 backdrop-blur-lg ">
          Nico
        </span>{" "}
      </h1>
      <p className=" text-accent-foreground text-[24px] font-light leading-[25px] animate__animated animate__fadeInLeft animate__fast">
        Front-end Developer and UI <br /> Designer
      </p>
      <Button
        size="icon"
        className=" active:translate-x-2 hover:translate-x-2 transition-all duration-700   h-12 mt-7 items-center text-lg hover:bg-accent-foreground/70 bg-accent-foreground backdrop-blur-md  text-accent w-[40%] gap-1 rounded-lg "
      >
       <span className=" mt-1 ml-2">Hire Me</span> 

        <ChevronRightIcon className="  hover:text-accent/90 text-lg text-accent h-8 w-8 "/>
       
      </Button>
    </div>
    <div className=" absolute bottom-0 flex flex-col gap-5">
     
      <a href="" >
        <GitHubLogoIcon  className="   animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/70  text-lg text-accent-foreground h-8 w-8 " />
      </a>
      <a href="" className=" ">
        <InstagramLogoIcon className=" animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/70  text-lg text-accent-foreground h-8 w-8 " />
      </a>
      <a href="" >
        <LinkedInLogoIcon className="animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/70  text-lg text-accent-foreground h-8 w-8 " />
      </a>
      
    </div>
  </div>


  

  <div className=" relative md:absolute flex h-[60%] flex-col justify-start gap-20">
    <div className=" flex flex-col  gap-2">
      <p className=" font-semibold text-xl text-primary animate__animated animate__fadeInUp animate__delay-.8s  ">Explore on</p>
      <div className=" flex flex-col gap-8 ">
        <h1 className="  animate__animated animate__fadeInUp animate__delay-.5s   text-accent-foreground font-semibold text-[34px]  leading-[38px] ">
          Based in Cagayan de Oro <br />
          i’m developer and <br />
          UI/UX designer.
        </h1>
        <p className=" animate__animated animate__fadeInRight animate__delay-1s  text-accent-foreground text-[16px] font-light leading-[25px] ">
          Hey are looking for a Front-end or Designer <br /> to build your
          brand and grow you business?
          <br />
          let’s shake hands with me.
        </p>

      </div>

      <p
       
        className=" active:translate-y-2 animate__animated animate__fadeIn animate__delay-1s  hover:cursor-pointer hover:bg-primary/30 backdrop-blur-lg  hover:text-accent-foreground transition-all duration-200 font-inter  mt-7  text-lg flex items-center justify-center gap-2   text-primary w-[40%]  rounded-md py-2 "
      >
        Download CV
        <DownloadIcon className=" mb-1   text-lg h-5 w-5 "/>
      </p>
      
    </div>
  </div>
</div>

<div className="relative h-[100vh] w-full  flex justify-around items-center  flex-col bg-background/10 backdrop-blur-lg box-border  ">
</div>

</div>
        

        </ThemeProvider>
      
  );
}



export default App