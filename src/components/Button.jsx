function Button({ text, href }) {
  return (
    <a
      href={href}
      className="cursor-pointer font-unbounded bg-blue-700 py-2 lg:text-2xl px-12 rounded-full text-white hover:bg-blue-500 duration-100"
    >
      {text}
    </a>
  );
}

export default Button;
