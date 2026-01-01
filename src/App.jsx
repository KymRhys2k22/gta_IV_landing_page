import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-xl text-pink ">
          Welcome to the world of the gta and gsap
        </h1>
      </div>
    </main>
  );
};

export default App;
