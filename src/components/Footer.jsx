import logo from "../../public/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className="custom-container">
      <div id="faq" className="lg:flex mb-14">
        <div className="mr-auto mb-14">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <div className="flex items-center gap-4 mb-4">
            <IoLocationOutline className="border rounded-md p-1 text-3xl" />
            <p>Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat</p>
          </div>
          <div className="flex items-center gap-4">
            <BsTelephone className="border rounded-md p-1 text-3xl" />
            <a href="tel:998 94 099 3434">+998 94 099 3434</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
