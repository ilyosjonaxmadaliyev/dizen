import Button from "./Button";
import { GrClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";


function Navbar({ setShow }) {
  const [t] = useTranslation("global");
  return (
    <div
      onClick={() => setShow(false)}
      className="w-full h-screen absolute top-0 left-0 bg-black/70"
    >
      <div className="fixed right-0 top-0 p-14 lg:hidden bg-white shadow-3xl h-full">
        <GrClose
          onClick={() => setShow(false)}
          className="absolute right-6 top-6 text-3xl"
        />
        <ul className="flex-col font-unbounded text-xl my-16 text-slate-600">
          <li className="mb-6">
            <a href="#home">{t("asosiy")}</a>
          </li>
          <li className="mb-6">
            <a href="#advantages">{t("afzal")}</a>
          </li>
          <li className="mb-6">
            <a href="#services">{t("xizmat")}</a>
          </li>
          <li>
            <a href="#faq">{t("faq")}</a>
          </li>
        </ul>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
