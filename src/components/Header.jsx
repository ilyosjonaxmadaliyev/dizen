import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import Navbar from "./Navbar";
import Button from "./Button";

import logo from "../../public/logo.jpg";

function Header({ mode, setMode }) {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [show, setShow] = useState(false);

  return (
    <div
      className={`py-6 shadow-md w-full fixed z-10 ${
        mode ? "bg-[#370e0e] shadow-red-300" : "bg-white"
      } `}
    >
      <div className="flex w-full items-center lg:justify-between custom-container">
        <a className="mr-auto lg:mr-0" href="#home">
          <img className="h-10 lg:h-12" src={logo} alt="logo" />
        </a>
        <div className="flex gap-5">
          <ul className="md:gap-5 gap-2 font-sansSerif hidden md:flex">
            <li className="hover:text-red-500 text-red-700 font-bold text-lg">
              <a href="#home">{t("asosiy")}</a>
            </li>
            <li className="hover:text-red-500 text-red-700 font-bold text-lg">
              <a href="#advantages">{t("afzalliklar")}</a>
            </li>
            <li className="hover:text-red-500 text-red-700 font-bold text-lg">
              <a href="#services">{t("xizmatlar")}</a>
            </li>
            <li className="hover:text-red-500 text-red-700 font-bold text-lg">
              <a href="#faq">{t("faq")}</a>
            </li>
          </ul>
          <select
            onChange={(e) => handleChangeLanguage(e.target.value)}
            className="font-sansSerif font-bold md:text-xl text-red-700 md:mr-3"
          >
            <option value="uz">{t("uzb")}</option>
            <option value="ru">{t("rus")}</option>
          </select>
        </div>
        <span
          className="text-xl md:text-3xl mx-2"
          onClick={() => setMode((prev) => !prev)}
        >
          {mode ? (
            <MdLightMode className="text-yellow-400" />
          ) : (
            <MdDarkMode className="text-black/70" />
          )}
        </span>
        <span className="hidden md:flex">
          <Button href="#contact" text={"Bog'lanish"} />
        </span>
        {show && <Navbar setShow={setShow} mode={mode} />}
        <HiMiniBars3
          onClick={() => setShow((prev) => !prev)}
          className="text-3xl text-red-700 md:hidden md:ml-3"
        />
      </div>
    </div>
  );
}

export default Header;
