import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "../../assets/images/menu.svg";
import menu_x from "../../assets/icons/katalog_x.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import yurak from "../../assets/icons/yurak.svg";
import shop from "../../assets/icons/shop.svg";
import KatalogMadal from "./KatalogMadal";

function NavCenter() {
  const [katalog, setKatalog] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-wrap justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition">
          <ShoppingBag className="w-6 h-6" />
          <h1 className="text-2xl md:text-3xl font-bold">Bek</h1>
        </Link>

        <button
          onClick={() => setKatalog(!katalog)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <Image src={katalog ? menu_x : menu} alt="Katalog" width={24} height={24} />
          <span className="font-medium">Katalog</span>
        </button>

        <div className="flex flex-1 max-w-lg w-full items-center border border-blue-600 rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Qidirish..."
            className="flex-1 px-4 py-2 text-sm text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white transition">
            <Image src={search} alt="Search" width={20} height={20} />
          </button>
        </div>

        <div className="flex gap-6">
          {[
            { icon: user, label: "Kirish" },
            { icon: yurak, label: "Sevimlilar" },
            { icon: shop, label: "Savatcha" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-700 transition cursor-pointer"
            >
              <Image src={item.icon} alt={item.label} width={28} height={28} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <KatalogMadal katalog={katalog} setKatalog={setKatalog} />
    </div>
  );
}

export default NavCenter;
