import { useTranslation } from "react-i18next";

function Button({ href }) {
  const [t] = useTranslation("global");
  return (
    <a
      href={href}
      className="cursor-pointer font-unbounded bg-red-700 py-2 lg:text-xl px-12 rounded-full text-white hover:bg-red-500 duration-100"
    >
      {t("button")}
    </a>
  );
}

export default Button;
