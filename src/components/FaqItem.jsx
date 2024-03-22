import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";

function FaqItem({ t, t2 }) {
  const [show, setShow] = useState(false);
  return (
    <div className="border-black/30 border-b-2">
      <h3
        onClick={() => setShow((prev) => !prev)}
        className="flex items-center cursor-pointer justify-between font-unbounded text-[#020C31] lg:text-2xl md:text-xl text-lg my-6"
      >
        {t}
        <span className="text-4xl bg-[#bdc1cf] rounded-full cursor-pointer">
          {show ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </span>
      </h3>

      {show && (
        <p className="font-sansSerif lg:text-xl md:text-base text-sm text-[#676D83]">
          {t2}
        </p>
      )}
    </div>
  );
}

export default FaqItem;
