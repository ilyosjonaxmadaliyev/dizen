import group1 from "../../public/Group-1.png";
import image3 from "../../public/image-3.webp";
import icon from "../../public/3dicons.png";
import Button from "./Button";

function Services() {
  return (
    <div id="services" className="custom-container mb-8">
      <div className="mb-24">
        <h3
          data-aos="fade-right"
          className="font-unbounded text-5xl text-[#020C31] mb-24"
        >
          Xizmatlar
        </h3>
        <div
          data-aos="fade-right"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div className="p-9 bg-[#F3F6F6] rounded-xl">
            <h4 className="font-unbounded text-2xl text-[#020C31] mb-2 font-bold">
              Boshlang’ich tushunchalar
            </h4>
            <h6 className="text-[#3375FF] text-bold font-unbounded text-sm font-bold mb-2">
              Nazariy Bilimlar
            </h6>
            <p className="text-[#3375FF] text-bold font-unbounded text-xs mb-60">
              16 dars
            </p>
            <img className="ml-auto" src={group1} alt="" />
          </div>
          <div className="p-9 bg-[#F3F6F6] rounded-xl">
            <h4 className="font-unbounded text-2xl text-[#020C31] mb-2 font-bold">
              Boshlang’ich tushunchalar
            </h4>
            <h6 className="text-[#3375FF] text-bold font-unbounded text-sm font-bold mb-2">
              Nazariy Bilimlar
            </h6>
            <p className="text-[#3375FF] text-bold font-unbounded text-xs mb-60">
              16 dars
            </p>
            <img className="ml-auto" src={group1} alt="" />
          </div>
          <div className="p-9 bg-[#F3F6F6] rounded-xl">
            <h4 className="font-unbounded text-2xl text-[#020C31] mb-2 font-bold">
              Boshlang’ich tushunchalar
            </h4>
            <h6 className="text-[#3375FF] text-bold font-unbounded text-sm font-bold mb-2">
              Nazariy Bilimlar
            </h6>
            <p className="text-[#3375FF] text-bold font-unbounded text-xs mb-60">
              16 dars
            </p>
            <img className="ml-auto" src={group1} alt="" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 p-6 gap-24 bg-[#33A9FF] mb-24 rounded-xl">
        <img className="rounded-xl hidden lg:flex" src={image3} alt="" />
        <div data-aos="fade-right">
          <img className="mb-8" src={icon} alt="" />
          <h3 className="font-unbounded text-white text-3xl mb-24">
            Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
            talaygina
          </h3>
          <Button text={"Bog'lanish"} href={"#contact"} />
        </div>
      </div>
      <div className="border-b-2 border-black/30 leading-[70px]"></div>
    </div>
  );
}

export default Services;
