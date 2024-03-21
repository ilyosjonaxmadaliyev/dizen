import Button from "./Button";
import Contact from "./Contact";
import FaqItem from "./FaqItem";

function Faq() {
  return (
    <div className="custom-container">
      <div id="faq" className="lg:flex mb-14">
        <h3
          data-aos="fade-right"
          className="font-unbounded text-5xl text-[#020C31] mt-6 mr-40"
        >
          FAQ
        </h3>
        <div className="w-full mb-24">
          <FaqItem />
          <FaqItem />
          <FaqItem />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Faq;
