import Image from "next/image";
import logo from "../images/logo.png";
import LunaPets from "../images/LunaPets.png";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-20 bg-yellow sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center  gap-1 md:gap-2 px-4">
        {/* logo */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer flex items-center justify-center h-[70%]">
          <Image
            src={logo}
            alt="logoImg"
            width={100}
            height={60}
            objectFit="cover"
          />
           <Image
            src={LunaPets}
            alt="LunaPets"
            width={150}
            height={100}
            objectFit="cover"
          />
        </div>
        {/* user info*/}
        <div className="flex items-center gap-6 ml-auto">
          <div className="text xs justify-center px-2 border border-transparent hover:border-white cursor-pointer">
            <p> Welcome!</p>
            <p className="font-bold flex items-center">
              <span>
                <FaUserAlt />
              </span>
              Sign in
            </p>
          </div>
          {/* cart */}
          <div className="text xs justify-center flex inline-flex px-2 border border-transparent cursor-pointer gap-1">
            <Link href={'/cart'} className="text-2xl">
              <FaShoppingCart />
            </Link>
            <span className="text-xs">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
