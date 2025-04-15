import React from "react";
import Image from "next/image";
import lokation from "../../assets/images/lokation.svg";

const NavTop = () => {
  return (
    <div className="bg-blue-800 text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          {/* Location */}
          <div className="flex items-center gap-2">
            <Image width={18} height={18} src={lokation} alt="Lokatsiya" />
            <span className="font-medium">Toshkent</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-center">
            <p className="hover:underline hover:text-blue-300 transition cursor-pointer">
              Bizning do'konlarimiz
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md text-white transition-all text-xs md:text-sm">
              Yuridik shaxslar uchun
            </button>
            <p className="hover:underline hover:text-blue-300 transition cursor-pointer">
              To'lov usullari
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right text-xs md:text-sm">
            <p>
              Aloqa markazi:{" "}
              <a
                href="tel:+998951116050"
                className="underline hover:text-blue-300 transition"
              >
                +998 95 111 60 50
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
