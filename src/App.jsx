import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import { Advantages, Faq, Footer, Header, Hero, Services } from "./components";
import { BsTelephone } from "react-icons/bs";

function App() {
  return (
    <>
      <Header />
      <div id="home" className="lg:h-48 md:h-36 h-32"></div>
      <Hero />
      <Advantages />
      <Services />
      <Faq />
      <Footer />
      <a href="tel:998 94 099 3434">
        <span>
          <BsTelephone className="border fixed lg:hidden rounded-xl text-white bg-gradient-to-r from-red-700 to-red-300 p-2 text-5xl right-8 bottom-6 z-50" />
        </span>
      </a>
    </>
  );
}

export default App;
