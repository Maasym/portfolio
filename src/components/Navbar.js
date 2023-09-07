import React, { useState } from 'react';
import { Link } from "react-scroll";
import '../index.css'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import logo from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 border-b-2 border-r-0 lg:border-r-2 lg:border-b-0 border-slate-600 flex flex-row lg:flex-col justify-between lg:justify-center items-center h-24 lg:h-screen">
            <div className="block lg:hidden ml-8">
                <img className="m-1 w-36 h-20 " src={logo} alt="Logo" title="Logo"/>
            </div>
            <div className="hidden flex-1 flex-row lg:h-screen lg:items-center lg:block">
                <div className="h-2/5 justify-center pt-8">
                    <img className="m-1 w-36 h-36 " src={logo} alt="Logo" title="Logo"/>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-col items-center gap-4 mt-12 uppercase font-mono text-xl">
                            <li>
                                <Link
                                    className="hover:text-cyan-400"
                                    activeClass="text-cyan-500"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-cyan-400"
                                    activeClass="text-cyan-500"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-cyan-400"
                                    activeClass="text-cyan-500"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="block lg:hidden mr-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`lg:hidden flex flex-col absolute top-24 left-0 bg-slate-900 w-screen h-screen pt-4 items-center ${isOpen ? "block" : "hidden"}`}>
                <nav>
                    <ul className="flex flex-col gap-4 uppercase font-mono text-xl">
                        <li>
                            <Link
                                activeClass="text-cyan-500"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="text-cyan-500"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="text-cyan-500"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Skills
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-row items-center m-32 lg:hidden">
                    <a className="mr-8" href="https://github.com/Maasym//" target="_blank">
                        <img className="m-1 w-12 h-12 " src={github} alt="Github" title="Github"/>
                    </a>
                    <a href="mailto:contact@spech.dev" target="_self">
                        <img className="m-1 w-12 h-12 " src={mail} alt="Mail" title="Mail"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-row mb-4 hidden lg:flex">
                <a className="mr-8" href="https://github.com/Maasym//" target="_blank">
                    <img className="m-1 w-12 h-12 " src={github} alt="Github" title="Github"/>
                </a>
                <a href="mailto:contact@spech.dev" target="_blank">
                    <img className="m-1 w-12 h-12 " src={mail} alt="Mail" title="Mail"/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;