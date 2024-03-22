import list1 from "../../public/list1.png";
import list2 from "../../public/afzal2.png";
import list3 from "../../public/afzal3.png";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function Advantages() {
  const [t] = useTranslation("global");
  return (
    <div id="advantages" className="custom-container mb-24">
      <h2
        data-aos="fade-right"
        className="font-unbounded text-3xl lg:text-5xl text-[#020C31] border-b-2 border-black/30 leading-[70px] mb-14"
      >
        {t("afzal")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-24">
        <div
          data-aos="fade-right"
          className="mb-12 w-full bg-[#d9ebeb] p-4 rounded-lg"
        >
          <img className="mb-3" src={list1} alt="" />
          <h4 className="font-unbounded text-[#020C31] text-2xl mb-3">
            {t("afzal1")}
          </h4>
          <p className="font-sansSerif text-sm text-[#676D83] ">
            {t("afzalDoc1")}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="mb-12 w-full bg-[#d9ebeb] p-4 rounded-lg"
        >
          <img className="mb-3" src={list2} alt="" />
          <h4 className="font-unbounded text-[#020C31] text-2xl mb-3">
            {t("afzal2")}
          </h4>
          <p className="font-sansSerif text-sm text-[#676D83] ">
            {t("afzalDoc2")}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="mb-12 w-full bg-[#d9ebeb] p-4 rounded-lg"
        >
          <img className="mb-3" src={list3} alt="" />
          <h4 className="font-unbounded text-[#020C31] text-2xl mb-3">
            {t("afzal3")}
          </h4>
          <p className="font-sansSerif text-sm text-[#676D83]">
            {t("afzalDoc3")}
          </p>
        </div>
      </div>
      <div className="advantageBg">
        <div className="grid lg:grid-cols-2  py-16 px-4 lg:py-16 lg:px-32 rounded-xl bg-black/30 w-full">
          <div className="hidden lg:flex"></div>
          <div data-aos="fade-right" className="">
            <h3 className="font-unbounded text-white text-2xl lg:text-4xl mb-7">
              {t("afzalInfo")}
            </h3>
            <p className="text-lg text-white mb-20 lg:mb-40">
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
