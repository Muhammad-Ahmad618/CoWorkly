import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <div className="flex items-center cursor-pointer mb-5">
      <Image src={logo} alt="Logo" width={30} height={30} />
      <span className="text-xl font-semibold text-gray-950">oworkly</span>
    </div>
  );
}

export default Logo;
