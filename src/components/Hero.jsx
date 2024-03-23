import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import heroImage from "../../public/hero-image.jpg";
import Button from "./Button";

function Hero() {
  const [t] = useTranslation("global");
  return (
    <div className="lg:pb-24 mb-10 custom-container ">
      <div className="rounded-xl grid md:grid-cols-2 heroBg md:bg-none">
        <div className="rounded-xl p-4 lg:p-0 bg-black/50 md:bg-black/0 w-full">
          <div data-aos="fade-right" className=" w-full">
            <h1 className="text-white md:text-red-800 font-bold font-unbounded text-2xl md:text-4xl lg:text-6xl  mb-11">
              {t("heroTitle")}
            </h1>

            <p className="text-white md:text-red-600 font-bold font-sansSerif text-sm md:text-base lg:text-xl lg:w-[400px] mb-8 lg:mb-16">
              {t("heroDoc")}
            </p>

            <div className="flex items-center gap-2">
              <Button text={"Bog'lanish"} href={"#contact"} />
              <span className="bg-white rounded-3xl border py-[2px] px-4 hidden md:flex">
                <MdArrowOutward className="text-4xl text-red-600" />
              </span>
            </div>
          </div>
        </div>
        <img className=" hidden md:flex h-full" src={heroImage} alt="image" />
      </div>
    </div>
  );
}

export default Hero;
