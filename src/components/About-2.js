import React from 'react';

function About() {

    return (
        <div className="text-slate-200 bg-slate-800">
            <div className="flex flex-col items-center w-12/12">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm font-mono font-normal w-11/12">
                    <div className="flex flex-col items-center rounded-md w-11/12 lg:w-2/5">
                      <div className="text-center text-3xl mb-4 font-bold">
                          Striving for Efficiency
                      </div>
                      <div className="text-center m-4 text-sm">
                          Efficiency is the cornerstone of my development philosophy. I'm driven by the quest to optimize code, to ensure that it not only runs but soars.
                          This means carefully weighing options, considering performance implications, and fine-tuning every line to achieve a level of efficiency
                          that sets the foundation for success.
                      </div>
                    </div>
                    <div className="flex flex-col items-center rounded-md mt-16 lg:mt-0 w-11/12 lg:w-2/5">
                      <div className="text-center text-3xl mb-4 font-bold">
                          Forward, Together
                      </div>
                      <div className="text-center m-4 text-sm">
                          In a rapidly evolving landscape, the intersection of development and operations is where innovation thrives.
                          I'm not just a DevOps engineer; I'm an advocate for progress. Through the seamless integration of code, collaboration, and efficiency,
                          I'm committed to driving projects forward.
                          Together, let's embark on a journey of innovation, crafting solutions that not only meet the demands of today but lay the groundwork
                          for a brighter, more efficient future.
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;