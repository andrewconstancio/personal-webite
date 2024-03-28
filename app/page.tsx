"use client"
import { useState, useEffect } from "react";
import { Shell } from "@/components/shell";
import { ThemeToggle } from "@/components/theme-toggle";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { PillView } from "@/components/pill-view";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";

  const words = [
    {
      text: "Hey, ",
      className: "text-sm lg:text-base"
    },
    {
      text: "I'm",
      className: "text-sm lg:text-base"
    },
    {
      text: "Andrew. ",
      className: "text-sm lg:text-base text-orange-500 dark:text-orange-300 ",
    },
    {
      text: "Thanks",
      className: "text-sm lg:text-base"
    },
    {
      text: "for",
      className: "text-sm lg:text-base"
    },
    {
      text: "checking",
      className: "text-sm lg:text-base"
    },
    {
      text: "out",
      className: "text-sm lg:text-base"
    },
    {
      text: "my",
      className: "text-sm lg:text-base"
    },
    {
      text: "page!",
      className: "text-sm lg:text-base"
    },
  ];

const jwLangs = [
  "HTML",
  "JavaScript",
  "jQuery",
  "Python",
  "Coldfusion",
  "SQL Server",
  "iOS Development"
]

const neetbookAppLangs = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Firebase",
  "ISBNdb"
]

const iosAppLangs = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "CoreData",
  "Objective-C",
  "Cocoa Pods",
  "Core Location",
  "Map Kit"
]

export default function IndexPage() {
  const [sectionOn, setSectionOn] = useState('about');

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      if(position < 100) {
        setSectionOn('about')
      }
      if(position >= 100 && position < 1000) {
        setSectionOn('experience')
      } 
      if(position >= 1000 && position < 1500) {
        setSectionOn('projects')
      }
      if(position >= 1500 && position < 1870) {
        setSectionOn('resume')
      }
      if(position >= 1870) {
        setSectionOn('contact')
      }
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Shell variant="markdown">
      <div className="pl-10 pr-10  lg:flex">
        <aside id="main-side-bar" className="mb-5 lg:mb-0 lg:justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight first:mt-0">
                Andrew Constancio
              </h2>
              <h3 className="text-xl font-semibold tracking-tight text-stone-500">
                Full Stack Developer / iOS Developer
              </h3>
            </div>
            <div className="hidden md:flex mt-5">
              <Avatar className="mr-4 h-14 w-14">
                  <AvatarImage src="/assets/me_1.jpeg" alt="AC" />
                  <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <TypewriterEffectSmooth words={words}/>
            </div>
          <nav className="hidden lg:block border-l-2 sticky top-0 mt-10 border-slate-700" id="mobileMenu">
            <ul className="flex flex-col gap-8 ml-[-2px]">
              <li>
                <a 
                  onClick={() => setSectionOn('about')} 
                  href="#about-me-section" 
                  className={cn(
                    "flex h-[44px] flex-col justify-center  border-slate-700 transition-all duration-200 ease-in-out hover:border-orange-500 active:border-white md:border-l-2 md:pl-6",
                    sectionOn === "about" && "border-orange-300 dark:border-orange-700"
                  )}                  
                >
                  <span className="text-slate-400 text-xl">About</span>
                  <span className="text-xs">A bunch of info about me</span>
                </a>
              </li>
              <li>
                <a 
                  onClick={() => setSectionOn('experience')} 
                  href="#experience-container" 
                  className={cn(
                    "flex h-[44px] flex-col justify-center  border-slate-700 transition-all duration-200 ease-in-out hover:border-orange-500 active:border-white md:border-l-2 md:pl-6",
                    sectionOn === "experience" && "border-orange-300 dark:border-orange-700"
                  )}
                >
                  <span className="text-slate-400 text-xl">Experience</span>
                  <span className="text-xs">Past &amp; present</span>
                </a>
              </li>
              <li>
                <a 
                  onClick={() => setSectionOn('projects')}  
                  href="#projects-container" 
                  className={cn(
                    "flex h-[44px] flex-col justify-center  border-slate-700 transition-all duration-200 ease-in-out hover:border-orange-500 active:border-white md:border-l-2 md:pl-6",
                    sectionOn === "projects" && "border-orange-300 dark:border-orange-700"
                  )}                
                >
                  <span className="text-slate-400 text-xl">Projects</span>
                  <span className="text-xs">Past &amp; present</span>
                </a>
              </li>
              <li>
                  <a 
                    onClick={() => setSectionOn('resume')} 
                    href="#resume-container" 
                    className={cn(
                      "flex h-[44px] flex-col justify-center  border-slate-700 transition-all duration-200 ease-in-out hover:border-orange-500 active:border-white md:border-l-2 md:pl-6",
                      sectionOn === "resume" && "border-orange-300 dark:border-orange-700"
                    )}                       
                  >                          
                    <span className="text-slate-400 text-xl">Resume</span>
                    <span className="text-xs">Check out my resume</span>
                  </a>
              </li>
              <li>
                <a 
                  onClick={() => setSectionOn('contact')} 
                  href="#resume-container" 
                  className={cn(
                    "flex h-[44px] flex-col justify-center  border-slate-700 transition-all duration-200 ease-in-out hover:border-orange-500 active:border-white md:border-l-2 md:pl-6",
                    sectionOn === "contact" && "border-orange-300 dark:border-orange-700"
                  )}   
                >                          
                    <span className="text-slate-400 text-xl">Contact</span>
                    <span className="text-xs">Send Me An Email</span>
                </a>
              </li>
            </ul>
          </nav>
          </div>
          <div className="ml-1 mt-8 flex items-center">
            <div className="flex gap-5 mr-2">
              <button>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.gitHub className="size-6" />
                  <span className="sr-only">Toggle theme</span>
                </Link>
              </button>
              <button>
                <Link
                  href={siteConfig.links.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="size-6 fill-blue-300 dark:fill-blue-900" />
                  <span className="sr-only">Toggle theme</span>
                </Link>
              </button>
            </div>
            <ThemeToggle />
          </div>
        </aside>

        <main className="lg:w-1/2 lg:pt-24">
          <div>
            <div className="snap-x md:mb-24 lg:mb-36 ">
              <div id="about-me-section" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <p className="mb-4">
                  As a Web and iOS-focused Engineer, I thrive on crafting innovative applications tailored for the end users. My journey involves continuous learning of programming languages, hands-on project experiences, and collaborative teamwork to ensure top-notch product delivery.
                </p>
                <p className="mb-4">
                  I remain dedicated to staying abreast of the ever-evolving web and mobile ecosystem, embracing new technologies, and exploring diverse programming languages to enrich my skill set and contribute meaningfully to the tech community.
                </p>
              </div>
              <div id="experience-container" className="mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Experience
                </h3>
                <div className="lg:grid mb-10 lg:grid-cols-4 lg:gap-4 rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <span className="text-sm font-light tracking-tigh mb-5">2019 - Present</span>
                  </div>
                  <div className="col-span-3">
                    <h3 className="text-md font-semibold tracking-tigh mb-5">
                      <div className="flex">
                        <span className="inline-flex items-baseline font-medium leading-tight">Full Stack Developer - Jon Wayne Service </span>
                      </div>
                    </h3>
                    <p className="text-sm">
                    Designed and built multiple web and mobile reactive internal applications for the
                    company. Reviewed and guided other developers on application standards. Used
                    best coding practices for architecture and optimization. Worked closely with Sr. developers on the field technician iOS App. The app lets
                    field techs use everything our system has to offer from their iPads and iPhones.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      {jwLangs.map((lang, i) => {
                        return <PillView key={i} text={lang} />
                      })}
                    </ul>
                  </div>
                </div>
                <div className="lg:grid lg:grid-cols-4 lg:gap-4 rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <span className="text-sm font-light tracking-tigh mb-5">2018 - Present</span>
                  </div>
                  <div className="col-span-3">
                    <h3 className="text-md font-semibold tracking-tigh mb-5">
                      <div className="flex">
                        <span className="inline-flex items-baseline font-medium leading-tight">iOS Application Developer - iOS Developer </span>
                      </div>
                    </h3>
                    <p className="text-sm mb-4">
                      Published IOS application project to the Apple App Store in late 2019. Written in Swift and Objective-c. With the help of Cocoa-pods and Core Frameworks.
                    </p>
                    <p className="text-sm mb-4">
                      Specialize in Apples Swift programming language, Cocoa Touch, Objective-c, object-oriented programming, and Google Firebase backend development.
                      Extensive experience with IOS Frameworks such as Core Data, Core Location, and MapKit. Knowledge of Apple’s design principals and application interface guidelines.
                    </p>
                    <p className="text-sm mb-4">
                      Extensive experience with IOS Frameworks such as Core Data, Core Location, and MapKit. Knowledge of Apple’s design principals and application interface guidelines.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      {iosAppLangs.map((lang, i) => {
                        return <PillView key={i} text={lang} />
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div id="projects-container" className="lg:mt-40 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Projects
                </h3>
                <div>
                {/* <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
                  <a href="https://apps.apple.com/us/app/neetbook-book-library/id6475701142" target="_">
                    <div className="mb-5 lg:grid lg:grid-cols-4 lg:gap-4 rounded p-4 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
                      <div className="hidden lg:block">
                        <img className="lg:h-22 h-50" src="/assets/neetbook_ios_1.png" alt="" />
                      </div>
                      <div className="col-span-3 mt-8">
                        <h3 className="text-md font-semibold tracking-tigh mb-5">
                          <div className="flex">
                            <span className="inline-flex items-baseline font-medium leading-tight">Neetbook  - iOS App </span>
                            <Icons.arrowUpRightIcon className="ml-3"/>
                          </div>
                        </h3>
                        <p>
                          Social media mobile app that gives you access to keep track of your entire book catalog. You can connect with friends through the app to keep up to date with what your friends are currently reading, want to read, or have read. Neetbook is fun to use and easy to have all of your book list in one place.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {neetbookAppLangs.map((lang, i) => {
                            return <PillView key={i} text={lang} />
                          })}
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div id="resume-container" className="lg:mt-40 mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Resume
                </h3>
                <a href="/assets/andrew-constancio-resume-software-developer.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="grid rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex m-auto">
                        <div>
                          <Icons.fileDocument className="size-10"/>
                        </div>
                        <div className="content-center ml-5 font-bold">
                          <span>Check out my resume</span>
                        </div>
                      </div>
                  </div>
                </a>
              </div>
              <div id="resume-container" className="lg:mt-40 mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Contact
                </h3>
                <a href="mailto:andrewconstancio9@gmail.com" target="_blank">
                  <div className="grid rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      {/* <img className="h-10 m-auto" src="/assets/email-icon.png"></img> */}
                      <div className="flex m-auto pr-5">
                        <div>
                          <Icons.emailIcon className="size-10"/>
                        </div>
                        <div className="content-center ml-5 font-bold">
                          <span>Send Me An Email</span>
                        </div>
                      </div>
                  </div>
                </a>
              </div>
              <div className="lg:h-[800px] justify-center">
                <p>
                  Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Shell>
  )
}
