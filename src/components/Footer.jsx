import logo from "../../public/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("global");
  return (
    <div className="custom-container mb-3">
      <div id="faq" className="md:flex">
        <a href="#home" className="mr-auto mb-14">
          <img className="h-10 lg:h-14 mb-8" src={logo} alt="" />
        </a>
        <div className="">
          <div className="flex items-center gap-4 mb-4">
            <IoLocationOutline className="border rounded-md p-1 text-3xl text-red-900" />
            <p className="text-red-700 font-sansSerif font-bold">
              {t("locatsion")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <BsTelephone className="border rounded-md p-1 text-3xl text-red-900" />
            <a
              className="text-red-700 font-sansSerif font-bold"
              href="tel:998 94 099 3434"
            >
              +998 94 099 3434
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
