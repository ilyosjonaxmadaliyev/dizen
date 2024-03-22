import group1 from "../../public/xizmat1.png";
import group2 from "../../public/xizmat2.png";
import group3 from "../../public/xizmat3.png";
import image3 from "../../public/image-3.webp";
import icon from "../../public/3dicons.png";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function Services() {
  const [t] = useTranslation("global");
  return (
    <div id="services" className="custom-container mb-8">
      <div className="mb-24">
        <h3
          data-aos="fade-right"
          className="font-unbounded text-3xl lg:text-5xl text-[#020C31] mb-24"
        >
          {t("xizmat")}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div data-aos="fade-right" className="p-4 bg-[#d9ebeb] rounded-xl">
            <img className="w-28 mb-4" src={group1} alt="" />
            <h4 className="font-unbounded text-2xl text-[#020C31] mb-2 font-bold">
              {t("xizmat1")}
            </h4>
            <h6 className="text-[#3375FF] text-bold font-unbounded text-sm font-bold mb-2">
              {t("xizmatDoc1")}
            </h6>
          </div>
          <div data-aos="fade-right" className="p-4 bg-[#d9ebeb] rounded-xl">
            <img className="w-28 mb-4" src={group2} alt="" />
            <h4 className="font-unbounded text-2xl text-[#020C31] mb-2 font-bold">
              {t("xizmat2")}
            </h4>
            <h6 className="text-[#3375FF] text-bold font-unbounded text-sm font-bold mb-2">
              {t("xizmatDoc2")}
            </h6>
          </div>
          <div data-aos="fade-right" className="p-4 bg-[#d9ebeb] rounded-xl">
            <img className="w-28 mb-4" src={group3} alt="" />
            <h4 className="font-unbounded text-2xl text-[#020C31] mb-2 font-bold">
              {t("xizmat3")}
            </h4>
            <h6 className="text-[#3375FF] text-bold font-unbounded text-sm font-bold mb-2">
              {t("xizmatDoc3")}
            </h6>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 p-6 gap-24 bg-[#33A9FF] mb-24 rounded-xl">
        <img className="rounded-xl hidden lg:flex" src={image3} alt="" />
        <div data-aos="fade-right">
          <img className="mb-8" src={icon} alt="" />
          <h3 className="font-unbounded text-white text-xl lg:text-3xl mb-24">
            {t("xizmatInfo")}
          </h3>
          <Button text={"Bog'lanish"} href={"#contact"} />
        </div>
      </div>
      <div className="border-b-2 border-black/30 leading-[70px]"></div>
    </div>
  );
}

export default Services;
