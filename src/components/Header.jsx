import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniBars3 } from "react-icons/hi2";

import Navbar from "./Navbar";
import Button from "./Button";

import logo from "../../public/logo.jpg";

function Header() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [show, setShow] = useState(false);

  return (
    <div className="py-6 shadow-md w-full fixed z-10 bg-white ">
      <div className="flex w-full items-center lg:justify-between custom-container">
        <a className="mr-auto lg:mr-0" href="#home">
          <img className="h-10 lg:h-12" src={logo} alt="logo" />
        </a>
        <div className="flex gap-5">
          <ul className="gap-5 font-sansSerif hidden lg:flex">
            <li>
              <a href="#home">{t("asosiy")}</a>
            </li>
            <li>
              <a href="#advantages">{t("afzalliklar")}</a>
            </li>
            <li>
              <a href="#services">{t("xizmatlar")}</a>
            </li>
            <li>
              <a href="#faq">{t("faq")}</a>
            </li>
          </ul>
          <select
            onChange={(e) => handleChangeLanguage(e.target.value)}
            className="font-sansSerif font-bold text-xl"
          >
            <option value="uz">{t("uzb")}</option>
            <option value="ru">{t("rus")}</option>
          </select>
        </div>
        <span className="hidden lg:flex">
          <Button href="#contact" text={"Bog'lanish"} />
        </span>
        {show && <Navbar setShow={setShow} />}
        <HiMiniBars3
          onClick={() => setShow((prev) => !prev)}
          className="text-3xl lg:hidden ml-3"
        />
      </div>
    </div>
  );
}

export default Header;
