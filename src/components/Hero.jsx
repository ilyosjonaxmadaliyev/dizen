import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import heroImage from "../../public/image-1.webp";
import heroImage2 from "../../public/hero-img.jpg";
import Button from "./Button";

function Hero() {
  const [t] = useTranslation("global");
  return (
    <div
      id="home"
      className="pt-40 pb-24 custom-container grid lg:grid-cols-2 gap-7 bg-[url('../../public/image-1.webp')] bg-cover bg-no-repeat bg-top lg:bg-none"
    >
      <div data-aos="fade-right" className="sm:max-w-[600px] w-full">
        <h1 className="text-[#3375FF] text-bold font-unbounded text-4xl sm:text-6xl mb-11">
          Dizenfeksiya xizmati
        </h1>

        <p className="text-[#676D83] text-sm lg:text-lg w-80 mb-48">
          Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
          kompaniyamiz Mijozlarimiz bizdan mamnun
        </p>

        <div className="flex items-center gap-2">
          <Button text={"Bog'lanish"} href={"#contact"} />
          <span className="bg-white rounded-3xl border py-[2px] px-4">
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
  );
}

export default Hero;
