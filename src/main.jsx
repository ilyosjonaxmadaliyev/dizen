import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";

import uz from "./languages/uz.json";
import ru from "./languages/ru.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") || "uz",
  resources: {
    uz: {
      global: uz,
    },
    ru: {
      global: ru,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
    <ToastContainer position="top-center" />
  </I18nextProvider>
);
