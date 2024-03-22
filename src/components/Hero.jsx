import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import heroImage from "../../public/image1.png";
import Button from "./Button";

function Hero() {
  const [t] = useTranslation("global");
  return (
    <div className="pt-32 lg:pt-40 lg:pb-24 mb-20 custom-container ">
      <div
        id="home"
        className="lg:p-0 rounded-xl grid lg:grid-cols-2 heroBg lg:bg-none"
      >
        <div className="p-4 rounded-xl bg-black/50 lg:bg-black/0 w-full">
          <div data-aos="fade-right" className=" w-full">
            <h1 className="text-white lg:text-[#3375FF] font-bold font-unbounded text-3xl md:text-5xl lg:text-6xl mb-11">
              {t("heroTitle")}
            </h1>

            <p className="text-white lg:text-[#676D83] font-bold text-lg md:text-xl lg:text-2xl lg:w-[400px] mb-16 lg:mb-48">
              {t("heroDoc")}
            </p>

            <div className="flex items-center gap-2">
              <Button text={"Bog'lanish"} href={"#contact"} />
              <span className="bg-white rounded-3xl border py-[2px] px-4 hidden md:flex">
                <MdArrowOutward className="text-4xl text-blue-600" />
              </span>
            </div>
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
