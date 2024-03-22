import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import heroImage from "../../public/image1.png";
// import heroImage2 from "../../public/hero-img.jpg";
import Button from "./Button";

function Hero() {
  const [t] = useTranslation("global");
  return (
    <div className="pt-32 lg:pt-40 lg:pb-24 mb-20 custom-container ">
      <div
        id="home"
        className="p-8 lg:p-0 rounded-xl grid lg:grid-cols-2 bg-[url('../../public/image1.png')] bg-cover bg-no-repeat bg-top lg:bg-none"
      >
        <div data-aos="fade-right" className=" w-full">
          <h1 className="text-[#3375FF] text-bold font-unbounded text-2xl md:text-4xl lg:text-6xl mb-11">
            {t("heroTitle")}
          </h1>

          <p className="text-[#3d3f45] text-lg md:text-xl lg:text-2xl lg:w-[400px] mb-24 lg:mb-48">
            {t("heroDoc")}
          </p>

          <div className="flex items-center gap-2">
            <Button text={"Bog'lanish"} href={"#contact"} />
            <span className="bg-white rounded-3xl border py-[2px] px-4 hidden md:flex">
              <MdArrowOutward className="text-4xl text-blue-600" />
            </span>
          </div>
        </div>
        <img
          className="rounded-xl hidden lg:flex h-full"
          src={heroImage}
          alt="image"
        />
      </div>
    </div>
  );
}

export default Hero;
