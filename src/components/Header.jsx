import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniBars3 } from "react-icons/hi2";

import Navbar from "./Navbar";
import Button from "./Button";

import logo from "../../public/logo.png";

function Header() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [show, setShow] = useState(false);

  return (
    <div className="py-6 shadow-md fixed w-full z-10 bg-white">
      <div className="flex w-full items-center lg:justify-between custom-container">
        <a className="mr-auto lg:mr-0" href="#home">
          <img src={logo} alt="logo" />
        </a>
        <div className="flex gap-5">
          <ul className="gap-5 font-sansSerif hidden lg:flex">
            <li>
              <a href="#home">Asosiy</a>
            </li>
            <li>
              <a href="#advantages">Afzalliklar</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
          <select
            onChange={(e) => handleChangeLanguage(e.target.value)}
            className="font-sansSerif font-bold text-xl"
          >
            <option value="uz">Uzb</option>
            <option value="ru">Rus</option>
          </select>
        </div>
        <span className="hidden lg:flex">
          <Button href="#contact" text={"Kirish"} />
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
