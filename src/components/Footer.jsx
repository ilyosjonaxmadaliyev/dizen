import logo from "../../public/logo.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useTranslation } from "react-i18next";


function Footer() {
  const [t] = useTranslation("global");
  return (
    <div className="custom-container">
      <div id="faq" className="lg:flex mb-14">
        <div className="mr-auto mb-14">
          <img className="h-10 lg:h-14" src={logo} alt="" />
        </div>
        <div className="">
          <div className="flex items-center gap-4 mb-4">
            <IoLocationOutline className="border rounded-md p-1 text-3xl" />
            <p>{ t ('locatsion')}</p>
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
