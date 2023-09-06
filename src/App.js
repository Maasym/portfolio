import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";


function App() {
  return (
    <div className="App">
        <div className="flex flex-col lg:flex-row">
            <div className="sticky top-0 w-12/12 lg:w-60 bg-gray-800 text-slate-200">
                <Navbar/>
            </div>

            <div className="w-12/12 lg:w-full flex flex-col text-slate-200 bg-slate-800">
                <section id="home">
                    <Home/>
                </section>
                <section id="about">
                    <About/>
                </section>
                <section id="skills">
                    <Skills/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
            </div>
        </div>
    </div>
  );
}

export default App;
