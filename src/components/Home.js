import React from 'react';
import {Link} from "react-scroll";

function Home() {
    return (
        <div className="flex flex-col justify-center items-center text-slate-200 bg-slate-800 h-screen">

            <div className="flex  flex-col w-3/4">
                <div className="text-5xl font-bold">
                    Hello, my name is Seb<br />
                    I'm a passionate <span className="text-cyan-400">DevOps Engineer</span>
                </div>
                <div className="text-sm font-mono font-normal mt-4 md:w-1/3">
                    With a strong focus on automation and collaboration, I ensure smooth deployments and empower teams to achieve their goals efficiently
                </div>
                <div className="mt-16">
                        <Link
                            className="hover:text-cyan-400"
                            activeClass="text-cyan-500"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <button className="rounded-md w-40 h-12 outline outline-1 outline-cyan-400">Discover more</button>
                        </Link>
                </div>
            </div>

        </div>
    );
}

export default Home;