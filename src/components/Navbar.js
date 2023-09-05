import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 border-b-2 border-r-0 lg:border-r-2 lg:border-b-0 flex flex-row lg:flex-col justify-between lg:justify-center items-center h-24 lg:h-screen">
            <div className="block lg:hidden ml-8">
                logo
            </div>
            <div className="hidden flex flex-row lg:basis:2/4 lg:items-center lg:block">
                <div>
                    logo
                </div>
                <div>
                    text
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
                dasdas
            </div>
        </div>
    );
}

export default Navbar;