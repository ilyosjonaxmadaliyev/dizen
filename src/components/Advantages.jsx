import list1 from "../../public/list1.png";
import Button from "./Button";

function Advantages() {
  return (
    <div id="advantages" className="custom-container mb-24">
      <h2
        data-aos="fade-right"
        className="font-unbounded text-5xl text-[#020C31] border-b-2 border-black/30 leading-[70px] mb-14"
      >
        Afzalliklarimiz
      </h2>
      <div
        data-aos="fade-right"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-24"
      >
        <div className="">
          <img className="mb-3" src={list1} alt="" />
          <h4 className="font-unbounded text-[#020C31] text-2xl mb-3">
            Tezda xizmat ko’rsatish
          </h4>
          <p className="font-sansSerif text-sm text-[#676D83] w-64">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="">
          <img className="mb-3" src={list1} alt="" />
          <h4 className="font-unbounded text-[#020C31] text-2xl mb-3">
            Tezda xizmat ko’rsatish
          </h4>
          <p className="font-sansSerif text-sm text-[#676D83] w-64">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="">
          <img className="mb-3" src={list1} alt="" />
          <h4 className="font-unbounded text-[#020C31] text-2xl mb-3">
            Tezda xizmat ko’rsatish
          </h4>
          <p className="font-sansSerif text-sm text-[#676D83] w-64">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
      </div>
      <div className="bg-[url('../../public/image-2.png')] rounded-xl bg-cover bg-no-repeat bg-center grid lg:grid-cols-2 py-16 px-32 lg:py-24 lg:px-44">
        <div className=""></div>
        <div data-aos="fade-left" className="">
          <h3 className="font-unbounded text-white text-4xl mb-7">
            Klapa va zararli hashorot endi yo’q deb hisoblang !!!
          </h3>
          <p className="text-lg text-white mb-40">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
          <Button text={"Bog'lanish"} href={"#contact"} />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
