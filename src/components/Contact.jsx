import faqImage from "../../public/faq-image.png";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");
  return (
    <div
      id="contact"
      className="grid lg:grid-cols-2 gap-16 bg-[#33A9FF] mb-24 lg:px-10 px-4 lg:pt-10 pt-4 rounded-xl"
    >
      <div className="bg-white rounded-xl p-4 lg:p-8 mb-4 lg:mb-10">
        <h3 className="font-unbounded text-xl lg:text-2xl text-[#020C31] mb-6 font-bold">
          {t("formTitle")}
        </h3>
        <form action="">
          <input
            className="bg-[#F3F6F6] w-full outline-none rounded-xl p-2 mb-6"
            placeholder={t("name")}
            type="text"
          />
          <input
            className="bg-[#F3F6F6] w-full outline-none rounded-xl p-2 mb-24"
            placeholder="+998 |"
            type="text"
          />
          <button className="cursor-pointer text-center font-unbounded bg-black/80 py-2 lg:text-xl px-12 rounded-xl text-white hover:bg-black/65 duration-100">
            {t("submit")}
          </button>
        </form>
      </div>
      <div className="hidden lg:block">
        <h3 className="font-unbounded text-white text-3xl mb-2">
          {t("formTitle2")}
        </h3>
        <img className="bottom-0" src={faqImage} alt="" />
      </div>
    </div>
  );
}

export default Contact;
