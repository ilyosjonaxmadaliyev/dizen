import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import {
  Advantages,
  Faq,
  Footer,
  Header,
  Hero,
  Services,
} from "./components";


function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
