import Button from "./Button";
import Contact from "./Contact";
import FaqItem from "./FaqItem";
import { useTranslation } from "react-i18next";

function Faq() {
  const [t] = useTranslation("global");
  return (
    <div className="custom-container">
      <div id="faq" className="lg:flex mb-14">
        <h3
          data-aos="fade-right"
          className="font-unbounded text-3xl lg:text-5xl text-[#020C31] mt-6 mr-40"
        >
          {t("faq")}
        </h3>
        <div className="w-full mb-24">
          <FaqItem t={t("faq1")} t2={t("faqInfo1")} />
          <FaqItem t={t("faq2")} t2={t("faqInfo2")} />
          <FaqItem t={t("faq3")} t2={t("faqInfo3")} />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Faq;
