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

export default function IndexPage() {
  const [sectionOn, setSectionOn] = useState('about');
  const [myElement, setMyElementIsVisible] = useState();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      if(position < 100) {
        setSectionOn('about')
      }
      if(position >= 100 && position < 500) {
        setSectionOn('experience')
      } 
      if(position >= 500 && position < 1000) {
        setSectionOn('projects')
      }
      if(position >= 1000 && position < 1300) {
        setSectionOn('resume')
      }
      if(position >= 1300) {
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
      <div className="p-10 lg:p-0 lg:flex">
        <aside id="main-side-bar" className="mb-5 lg:mb-0 lg:justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight first:mt-0">
                Andrew Constancio
              </h2>
              <h3 className="text-xl font-semibold tracking-tight text-stone-500">
                iOS Engineer
              </h3>
            </div>
            <div className="flex mt-5">
            <Avatar className="mr-4 h-14 w-14">
                <AvatarImage src="/assets/me_1.jpeg" alt="AC" />
                <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <TypewriterEffectSmooth words={words}/>
          </div>
          <nav className="hidden lg:block border-l-2 sticky top-0 mt-10 border-slate-700" id="mobileMenu">
            <ul className="flex flex-col gap-8 ml-[-2px]">
              <li>
                <a onClick={() => setSectionOn('about')} href="#about-me-section" className={sectionOn == 'about' ? 'border-orange-500 flex flex-col md:border-l-2  hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>
                  <span className="text-slate-400 text-xl">About</span>
                  <span className="text-xs">A bunch of info about me</span>
                </a>
              </li>
              <li>
                <a onClick={() => setSectionOn('experience')} href="#experience-container" className={sectionOn == 'experience' ? 'border-orange-500 flex flex-col md:border-l-2  hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>
                  <span className="text-slate-400 text-xl">Experience</span>
                  <span className="text-xs">Past &amp; present</span>
                </a>
              </li>
              <li>
                <a onClick={() => setSectionOn('projects')}  href="#projects-container" className={sectionOn == 'projects' ? 'border-orange-500 flex flex-col md:border-l-2  hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>
                  <span className="text-slate-400 text-xl">Projects</span>
                  <span className="text-xs">Past &amp; present</span>
                </a>
              </li>
              <li>
                  <a onClick={() => setSectionOn('resume')} href="#resume-container" className={sectionOn == 'resume' ? 'border-orange-500 flex flex-col md:border-l-2  hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>                          
                    <span className="text-slate-400 text-xl">Resume</span>
                    <span className="text-xs">Check out my resume</span>
                  </a>
              </li>
              <li>
                <a onClick={() => setSectionOn('contact')} href="#resume-container" className={sectionOn == 'contact' ? 'border-orange-500 flex flex-col md:border-l-2  hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>                          
                    <span className="text-slate-400 text-xl">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          </div>
          <div className="ml-1 mt-8 flex items-center gap-3">
            <a href="https://github.com/andrewconstancio" target="_">
              <img className="h-8" src="/assets/github-mark.svg"></img>
            </a>
            <a href="https://www.linkedin.com/in/andrew-constancio-a8832917a/" target="_">
              <img className="h-8" src="/assets/linked_in.png"></img>
            </a>
            <ThemeToggle />
          </div>
        </aside>

        <main className="lg:w-1/2 lg:pt-24">
          <div>
            <div className="snap-x md:mb-24 lg:mb-36 ">
              <div id="about-me-section" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <p className="mb-4">
                  As an iOS-focused Mobile Engineer, I thrive on crafting innovative applications tailored for the iOS platform. My journey involves continuous learning of programming languages, hands-on project experiences, and collaborative teamwork to ensure top-notch product delivery.
                </p>
                <p className="mb-4">
                  I remain dedicated to staying abreast of the ever-evolving mobile ecosystem, embracing new technologies, and exploring diverse programming languages to enrich my skill set and contribute meaningfully to the tech community.
                </p>
              </div>
              <div id="experience-container" className="mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Experience
                </h3>
                <div className="grid grid-cols-4 gap-4 rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
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
              </div>
              <div id="projects-container" className="mt-40 mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Projects
                </h3>
                <div>
                {/* <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
                  <a href="https://apps.apple.com/us/app/neetbook-book-library/id6475701142" target="_">
                    <div className="mb-5 grid grid-cols-4 gap-4 rounded p-4 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
                      <div>
                        <img className="h-50" src="/assets/neetbook_ios_1.png" alt="" />
                      </div>
                      <div className="col-span-3 mt-8">
                        <h3 className="text-md font-semibold tracking-tigh mb-5">
                          <div className="flex">
                            <span className="inline-flex items-baseline font-medium leading-tight">Neetbook  - iOS App </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
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
              <div id="resume-container" className="mt-40 mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Resume
                </h3>
                <a href="https://scarlet-jerrilyn-72.tiiny.site/" target="_blank">
                  <div className="grid rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex m-auto">
                        <div>
                          <svg className="h-20 m-auto fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"/></svg>
                        </div>
                        <div className="content-center ml-5 font-bold">
                          <span>Check out my resume</span>
                        </div>
                      </div>
                  </div>
                </a>
              </div>
              <div id="resume-container" className="mt-40 mb-16 snap-start scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h3 className="text-xl font-semibold tracking-tigh mb-5">
                    Contact
                </h3>
                <a href="mailto:andrewconstancio9@gmail.com" target="_blank">
                  <div className="grid rounded p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      {/* <img className="h-10 m-auto" src="/assets/email-icon.png"></img> */}
                      <div className="flex m-auto">
                        <div>
                          <svg version="1.1" viewBox="0 0 512 512" className="h-20 inline m-auto fill-black dark:fill-white"  xmlns="http://www.w3.org/2000/svg"><g><polygon points="448,384 448,141.8 316.9,241.6 385,319 383,321 304.1,251.4 256,288 207.9,251.4 129,321 127,319 195,241.6    64,142 64,384  "/><polygon points="439.7,128 72,128 256,267.9  "/></g></svg>
                        </div>
                        <div className="content-center ml-5 font-bold">
                          <span>Send Me An Email</span>
                        </div>
                      </div>
                  </div>
                </a>
              </div>
              <div className="h-[200px] justify-center">
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
