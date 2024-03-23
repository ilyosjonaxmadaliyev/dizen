import contactImage from "../../public/contact-image.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Contact() {
  const [t] = useTranslation("global");

  const [ok, setOk] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOk("✓ Ssuccess");
    setTimeout(() => {
      setOk("");
    }, 3000);
  };
  return (
    <div
      id="contact"
      className="grid md:grid-cols-2 lg:gap-40 md:gap-24 bg-gradient-to-r from-red-800 to-red-50 mb-24 lg:px-10 md:px-4 lg:pt-10 md:pt-4 rounded-xl"
    >
      <div className="bg-gradient-to-r from-red-300 to-red-10 rounded-xl p-4 lg:p-8 md:mb-4 lg:mb-10">
        <h3 className="font-unbounded text-lg lg:text-2xl text-red-700 mb-6 font-bold">
          {t("formTitle")}
        </h3>
        <form action="">
          <input
            className="bg-[#F3F6F6] w-full outline-none rounded-xl p-2 mb-6"
            placeholder={t("name")}
            type="text"
          />
          <input
            className="bg-[#F3F6F6] w-full outline-none rounded-xl p-2 mb-12"
            placeholder="+998 |"
            type="number"
          />
          <button
            onClick={handleSubmit}
            className="cursor-pointer text-center font-unbounded bg-gradient-to-r from-red-300 to-red-700 hover:from-red-700 hover:to-red-300 py-2 lg:text-xl px-12 rounded-xl text-white duration-100"
          >
            {t("submit")}
          </button>
          <p className="text-red-800 text-xl">{ok}</p>
        </form>
      </div>
      <div className="hidden md:block">
        <h3 className="font-unbounded text-red-700 text-3xl mb-2">
          {t("formTitle2")}
        </h3>
        <img className="lg:h-80 md:h-56" src={contactImage} alt="" />
      </div>
    </div>
  );
}

export default Contact;
