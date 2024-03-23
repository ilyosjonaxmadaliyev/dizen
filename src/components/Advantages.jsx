// import list1 from "../../public/list1.png";
// import list2 from "../../public/afzal2.png";
// import list3 from "../../public/afzal3.png";
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
          className="mb-12 w-full bg-gradient-to-b from-red-200 to-red-50 p-4 rounded-lg"
        >
          <img className="mb-3" src={""} alt="" />
          <h4 className="font-unbounded text-red-700 text-xl md:text-2xl mb-3">
            {t("afzal1")}
          </h4>
          <p className="font-sansSerif text-sm text-red-500 lowercase">
            {t("afzalDoc1")}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="mb-12 w-full bg-gradient-to-b from-red-200 to-red-50 p-4 rounded-lg"
        >
          <img className="mb-3" src={""} alt="" />
          <h4 className="font-unbounded text-red-700 text-xl md:text-2xl mb-3">
            {t("afzal2")}
          </h4>
          <p className="font-sansSerif text-sm text-red-500 lowercase">
            {t("afzalDoc2")}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="mb-12 w-full bg-gradient-to-b from-red-200 to-red-50 p-4 rounded-lg"
        >
          <img className="mb-3" src={""} alt="" />
          <h4 className="font-unbounded text-red-700 text-xl md:text-2xl mb-3">
            {t("afzal3")}
          </h4>
          <p className="font-sansSerif text-sm text-red-500 lowercase">
            {t("afzalDoc3")}
          </p>
        </div>
      </div>
      <div className="advantageBg rounded-xl">
        <div className="grid lg:grid-cols-2  py-16 px-4 lg:py-16 lg:px-32 rounded-xl bg-gradient-to-r from-red-300/20 to-red-100/70 w-full">
          <div className="hidden lg:flex"></div>
          <div data-aos="fade-right" className="">
            <h3 className="font-unbounded text-red-950 text-2xl md:text-3xl lg:text-3xl mb-7">
              {t("afzalInfo")}
            </h3>
            <p className="text-lg text-red-900 mb-20 lg:mb-40">
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
