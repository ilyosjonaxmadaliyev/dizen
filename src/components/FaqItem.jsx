import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";

function FaqItem({ t, t2 }) {
  const [show, setShow] = useState(false);
  return (
    <div className="border-black/30 border-b-2">
      <div className="flex items-center justify-between font-unbounded text-[#676D83] text-2xl my-6">
        {t}
        <span
          onClick={() => setShow((prev) => !prev)}
          className="text-4xl bg-[#bdc1cf] rounded-full cursor-pointer"
        >
          {show ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </span>
      </div>

      {show && <p className="font-sansSerif text-xl text-[#676D83]">{t2}</p>}
    </div>
  );
}

export default FaqItem;
