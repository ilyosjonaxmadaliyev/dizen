import { useTranslation } from "react-i18next";

function Button({ href }) {
  const [t] = useTranslation("global");
  return (
    <a
      href={href}
      className="cursor-pointer font-unbounded bg-gradient-to-r from-red-400 to-red-900 hover:from-red-700 hover:to-red-300 py-2 lg:text-xl px-12 rounded-full text-white"
    >
      {t("button")}
    </a>
  );
}

export default Button;
