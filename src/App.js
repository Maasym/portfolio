import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About1 from "./components/About-1";
import About from "./components/About";
import About2 from "./components/About-2";
import Skills from "./components/Skills";
import Empty from "./components/empty";


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
                    <About1/>
                    <About2/>
                </section>
                <section id="skills">
                    <Empty/>
                    <Skills/>
                </section>
            </div>
        </div>
    </div>
  );
}

export default App;
