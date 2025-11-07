import { ScrollTrigger, SplitText } from "gsap/all";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
    </div>
  );
};

export default App;
