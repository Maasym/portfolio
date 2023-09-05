import Navbar from "./components/Navbar";
import About from "./components/About";


function App() {
  return (
    <div className="App">
        <div className="flex flex-col lg:flex-row">
            <div className="sticky top-0 w-12/12 lg:w-3/12 bg-gray-800 text-3xl font-bold text-slate-200">
                <Navbar/>
            </div>

            <div className="w-12/12 lg:w-9/12 flex flex-col text-3xl font-bold text-slate-200 bg-slate-800">
                <About/>
                <About/>
                <About/>
                <About/>

            </div>
        </div>
    </div>
  );
}

export default App;
