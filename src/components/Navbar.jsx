import { useState } from "react";
import Curriculum from '../assets/pdf/curriculum.pdf'
import { Options } from "../data/Options";

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className="fixed w-full z-20 top-0 left-0 border-b bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:bg-transparent">
                <div className="container m-auto px-2 md:px-12 lg:px-7">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                        <div 
                            className="w-full flex justify-between lg:w-max md:px-0" 
                            onClick={ () => setOpenMenu( (prev) => !prev) }
                        >
                            <label className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div 
                                    aria-hidden="true" 
                                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                                ></div>
                                <div 
                                    aria-hidden="true" 
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                                ></div>
                                <div 
                                    aria-hidden="true" 
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                                ></div>
                            </label>
                        </div>

                        <div className="hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                            <div className="text-gray-600 lg:pr-4">
                                <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                                    {
                                        Options.map( (option) => (
                                            <li key={option.id}>
                                                <div 
                                                    onClick={() => window.open(option.icon, "_blank")} 
                                                    className="block md:px-4 transition hover:text-sky-700 cursor-pointer"
                                                >
                                                    <img src={option.link} alt={option.name} />
                                                </div>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>

                            <div className="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                <a
                                    href={Curriculum}
                                    download="CURRICULUM VITAE" 
                                    className="w-full py-2.5 px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max">
                                    <span className="block text-sky-800 font-semibold lg:text-sm">
                                        Currículum
                                    </span>
                                </a>
                                <button  
                                    className="w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max">
                                    <span className="block text-sky-900 font-semibold lg:text-sm">
                                        Contáctame
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={ openMenu ? "showMenuNav" : "hideMenuNav" }>
                <div className={ openMenu ? "w-full flex-wrap justify-center items-center mt-[-80px] space-y-20 p-6 rounded-2xl shadow-xl bg-white " : "hidden"}>
                    <div className="grid gap-10 grid-cols-3 text-center mt-28">
                        {
                            Options.map( (option) => (
                                <div key={option.id}>
                                    <div 
                                        onClick={() => window.open(option.icon, "_blank")} 
                                        className="transition hover:text-sky-700 cursor-pointer"
                                    >
                                        <img src={option.link} alt={option.name} className="h-16 block m-auto" />
                                        <span className="text-xl">{option.name}</span>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>

                    <div className="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                        <a
                            href={Curriculum}
                            download="CURRICULUM VITAE" 
                            className="w-full py-2.5 px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max"
                        >
                            <span className="block text-sky-800 font-semibold lg:text-sm">
                                Currículum
                            </span>
                        </a>
                        <button 
                            className="w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max"
                        >
                            <span className="block text-sky-900 font-semibold lg:text-sm">
                                Contáctame
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
