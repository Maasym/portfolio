import React from 'react';

function About() {

    return (
        <div className="text-slate-200 bg-slate-800">
            <div className="flex flex-col items-center w-12/12">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm font-mono font-normal w-11/12">
                    <div className="flex flex-col items-center rounded-md w-11/12 lg:w-2/5">
                      <div className="text-center text-3xl mb-4 font-bold">
                          My Journey
                      </div>
                      <div className="text-center m-4 text-sm">
                          My journey into the realm of DevOps began in the world of operations, where I developed a keen understanding of infrastructure,
                          stability, and the critical role operations play in maintaining the backbone of any IT ecosystem.
                          However, my passion for development, innovation, and the need to bridge the gap between these
                          two worlds led me to the exciting field of DevOps.
                      </div>
                    </div>
                    <div className="flex flex-col items-center rounded-md mt-16 lg:mt-0 w-11/12 lg:w-2/5">
                      <div className="text-center text-3xl mb-4 font-bold">
                          Passion for Development
                      </div>
                      <div className="text-center m-4 text-sm">
                          In the world of DevOps, what truly sets me apart is an insatiable passion for development. I find boundless joy in immersing myself in code,
                          sculpting it into elegant solutions that transcend functionality.
                          It's not just about lines of code; it's about crafting an orchestration that harmonizes seamlessly with the broader system.
                          Through years of hands-on experience, I've honed the art of translating complex concepts into practical, elegant code.
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;