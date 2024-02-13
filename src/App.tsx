import { ThemeProvider } from "@/components/theme-provider"

import viteLogo from "/vite.svg";

import { Link, Outlet } from "react-router-dom";
import { ChevronRightIcon, GitHubLogoIcon,InstagramLogoIcon,LinkedInLogoIcon,DownloadIcon } from '@radix-ui/react-icons'
import GojoProfile from "./assets/images/gojo-1.webp"
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" relative flex flex-col bg-background h-screen w-screen ">
       
        <div className=" flex justify-around items-center w-full py-5  animate__animated animate__fadeInDown">
          <Link to="/react-vite-supreme" className=" flex  items-center gap-10">
            <h1 className=" text-primary text-4xl font-inter font-black leading-[30px] ">
              N <span className=" text-accent-foreground ml-[2px]">I</span> <br />{" "}
              <span>CO</span>{" "}
            </h1>
          </Link>

          <nav className=" text-accent-foreground flex gap-10">
            <a className=" hover:underline animate__animated animate__faster animate__fadeInDown animate__delay-1s	" href="/react-vite-supreme/page2">About</a>
            <a className=" hover:underline animate__animated animate__faster animate__fadeInDown animate__delay-2s" href="/react-vite-supreme/contact">Work</a>
            <a className=" hover:underline animate__animated animate__faster animate__fadeInDown animate__delay-3s" href="/react-vite-supreme/contact">Contact</a>
          </nav>
        </div>

        <Outlet />
        <div className="relative h-full w-full bg-background flex justify-around items-center overflow-hidden  ">
          <div className=" absolute  z-0 animate__animated animate__fast  animate__fadeIn ">
            <img
              className=" md:scale-[1.3] object-contain h-[1000px] animate-float "
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
                className=" animate__animated animate__zoomIn animate__faster h-12 mt-7 items-center text-lg hover:bg-accent-foreground/70 bg-accent-foreground backdrop-blur-md  text-accent w-[40%] gap-1 rounded-lg"
              >
                Hire Me

                <ChevronRightIcon className="hover:text-accent/90 text-lg text-accent h-8 w-8 "/>
               
              </Button>
            </div>
            <div className=" absolute bottom-0 flex flex-col gap-5">
              <a href="">
                <GitHubLogoIcon className=" animate__animated animate__fadeInUp animate__faster animate__delay-.3s hover:text-accent-foreground/90 text-lg text-accent-foreground h-8 w-8 " />
              </a>
              <a href="">
                <InstagramLogoIcon className="animate__animated animate__fadeInUp animate__faster animate__delay-.6s hover:text-accent-foreground/90  text-lg text-accent-foreground h-8 w-8 " />
              </a>
              <a href="">
                <LinkedInLogoIcon className="animate__animated animate__fadeInUp animate__faster animate__delay-.9s hover:text-accent-foreground/90  text-lg text-accent-foreground h-8 w-8 " />
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
               
                className=" animate__animated animate__fadeIn animate__delay-1s  hover:cursor-pointer hover:bg-primary/30 backdrop-blur-lg  hover:text-accent-foreground ease-in-out font-inter  mt-7  text-lg flex items-center justify-center gap-2   text-primary w-[40%]  rounded-md py-2"
              >
                Download CV
                <DownloadIcon className=" mb-1   text-lg h-5 w-5 "/>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}



export default App
