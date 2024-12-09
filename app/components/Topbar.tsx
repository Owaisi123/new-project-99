import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272343] py-2 flex items-center justify-between text-white text-sm px-4">
      <p className="flex items-center gap-2">
        <FaCheck />
        Free shipping on all orders over $50
      </p>
      <ul className="flex items-center gap-4">
        <li className="flex items-center gap-1 cursor-pointer">
          Eng <ChevronDown />
        </li>
        <li>
          <Link href="#">FAQs</Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <FaExclamationCircle /> Need Help
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
