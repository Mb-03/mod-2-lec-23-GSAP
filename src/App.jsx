import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
