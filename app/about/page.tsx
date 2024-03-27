"use client"
import { useRef, useState } from "react";
import { Shell } from "@/components/shell"
export default function AboutPage() {
  const [sectionOn, setSectionOn] = useState('about');

  return (
    <Shell variant="markdown">
      <div className="flex">
        <aside className="max-h-screen sticky top-5 w-1/3">
          <div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight first:mt-0">
                Andrew Constancio
              </h2>
              <h3 className="text-xl font-semibold tracking-tight text-stone-500">
                Full Stack Developer / iOS Engineer
              </h3>
            </div>
          </div>
                        {/* <div className="flex">
            <Avatar className="mr-4 h-14 w-14">
                <AvatarImage src="/assets/me_1.jpeg" alt="AC" />
                <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <TypewriterEffectSmooth words={words} className="align-top"/>
          </div> */}
          <nav className="border-l-2 sticky top-0 mt-10 border-slate-700" id="mobileMenu">
            <ul className="flex flex-col gap-8 ml-[-2px]">
              <li>
                  <button onClick={() => setSectionOn('about')} className={sectionOn == 'about' ? 'border-orange-500 flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>
                      <span className="text-slate-400 text-xl">About</span>
                      <span className="text-xs">A bunch of info about me</span>
                  </button>
              </li>
              <li>
                  <button onClick={() => setSectionOn('projects')} className={sectionOn == 'projects' ? 'border-orange-500 flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>                          
                    <span className="text-slate-400 text-xl">Projects</span>
                    <span className="text-xs">Past &amp; present</span>
                  </button>
              </li>
              <li>
              <button onClick={() => setSectionOn('contact')} className={sectionOn == 'Contact' ? 'border-orange-500 flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' : 'flex flex-col md:border-l-2 border-slate-700 hover:border-orange-500 active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center'}>
                      <span className="text-slate-400 text-xl">Contact</span>
                      <span className="text-xs">How to get ahold of me</span>
                  </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="w-2/3">
          <div>
            <div className="w-2/3 m-auto">

              <div className="min-h-[300px]">
                <p>
                  As an iOS-focused Mobile Engineer, I thrive on crafting innovative applications tailored for the iOS platform. My journey involves continuous learning of programming languages, hands-on project experiences, and collaborative teamwork to ensure top-notch product delivery. I remain dedicated to staying abreast of the ever-evolving mobile ecosystem, embracing new technologies, and exploring diverse programming languages to enrich my skill set and contribute meaningfully to the tech community.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold tracking-tight">
                    Projects
                </h3>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
              </div>

              <div className="min-h-[300px]">
                <p>
                  As an iOS-focused Mobile Engineer, I thrive on crafting innovative applications tailored for the iOS platform. My journey involves continuous learning of programming languages, hands-on project experiences, and collaborative teamwork to ensure top-notch product delivery. I remain dedicated to staying abreast of the ever-evolving mobile ecosystem, embracing new technologies, and exploring diverse programming languages to enrich my skill set and contribute meaningfully to the tech community.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold tracking-tight">
                    Projects
                </h3>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
              </div>

              <div className="min-h-[300px]">
                <p>
                  As an iOS-focused Mobile Engineer, I thrive on crafting innovative applications tailored for the iOS platform. My journey involves continuous learning of programming languages, hands-on project experiences, and collaborative teamwork to ensure top-notch product delivery. I remain dedicated to staying abreast of the ever-evolving mobile ecosystem, embracing new technologies, and exploring diverse programming languages to enrich my skill set and contribute meaningfully to the tech community.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold tracking-tight">
                    Projects
                </h3>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </Shell>
  
  )
}