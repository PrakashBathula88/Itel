import Commercial from "./Components/Commercial/page";
import Home from "./Components/HomePage/page";
import Nav from "./Components/Nav/page";
import Projects from "./Components/Projects/Projects";
import Purchasing from "./Components/Purchasing/page";
import Recomend from "./Components/Recomend/page";
import Service from "./Components/Service/page";
import Tips from "./Components/Tips/page";

const page = () => {
  return (
    <div className="animate-fade-in">
      <Nav />
      <Home />
      <Recomend />
      <Commercial />
      <Projects />
      <Service />
      <Purchasing />
      <Tips />
    </div>
  );
};

export default page;
