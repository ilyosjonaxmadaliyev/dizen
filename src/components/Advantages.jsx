import { BsPersonGear } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import { FaStudiovinari } from "react-icons/fa";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function Advantages() {
  const [t] = useTranslation("global");
  return (
    <div id="advantages" className="custom-container mb-24">
      <h2
        data-aos="fade-right"
        className="font-unbounded text-2xl md:4xl lg:text-5xl text-red-700 border-b-2 border-black/30 leading-[70px] mb-14"
      >
        {t("afzal")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
        <div
          data-aos="fade-right"
          className="mb-6 w-full bg-gradient-to-b from-red-200 to-red-50 p-4 rounded-lg"
        >
          <FaStudiovinari className="w-16 h-16 mb-5 text-red-700" />
          <h4 className="font-unbounded text-red-700 text-xl md:text-2xl mb-3">
            {t("afzal1")}
          </h4>
          <p className="font-sansSerif text-sm text-red-500 lowercase">
            {t("afzalDoc1")}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="mb-6 w-full bg-gradient-to-b from-red-200 to-red-50 p-4 rounded-lg"
        >
          <BsPersonGear className="w-16 h-16 mb-5 text-red-700" />
          <h4 className="font-unbounded text-red-700 text-xl md:text-2xl mb-3">
            {t("afzal2")}
          </h4>
          <p className="font-sansSerif text-sm text-red-500 lowercase">
            {t("afzalDoc2")}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="mb-6 w-full bg-gradient-to-b from-red-200 to-red-50 p-4 rounded-lg"
        >
          <GrInProgress className="w-16 h-16 mb-5 text-red-700" />
          <h4 className="font-unbounded text-red-700 text-xl md:text-2xl mb-3">
            {t("afzal3")}
          </h4>
          <p className="font-sansSerif text-sm text-red-500 lowercase">
            {t("afzalDoc3")}
          </p>
        </div>
      </div>
      <div className="advantageBg rounded-xl">
        <div className="grid md:grid-cols-2  py-16 px-4 lg:py-16 lg:px-32 rounded-xl bg-black/30 md:bg-gradient-to-r from-red-700/30 to-red-50/95 w-full">
          <div className="hidden md:flex"></div>
          <div data-aos="fade-right" className="">
            <h3 className="font-unbounded text-white md:text-red-700 text-2xl md:text-3xl lg:text-4xl mb-7">
              {t("afzalInfo")}
            </h3>
            <p className="text-2xl text-white md:text-red-600 mb-20 lg:mb-40">
              {t("afzalInfoDoc")}
            </p>
            <Button text={"Bog'lanish"} href={"#contact"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
