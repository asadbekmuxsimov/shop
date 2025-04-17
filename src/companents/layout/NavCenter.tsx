"use client";
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
import { CardsDataType } from "@/type/Types";

import { addToFavorites, removeFromFavorites } from "@/redux/favoriteSlice";
import { addToCart, removeFromCart } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function NavCenter() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const favorites = useSelector((state: RootState) => state.favorite.favorites);

  const [katalog, setKatalog] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleToggleFavorite = (item: CardsDataType) => {
    const isFav = favorites.some((fav) => fav.id === item.id);
    if (isFav) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-wrap justify-between items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition"
        >
          <ShoppingBag className="w-6 h-6" />
          <h1 className="text-2xl md:text-3xl font-bold">Bek</h1>
        </Link>

        {/* Katalog Button */}
        <button
          onClick={() => setKatalog(!katalog)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <Image
            src={katalog ? menu_x : menu}
            alt="Katalog"
            width={24}
            height={24}
          />
          <span className="font-medium">Katalog</span>
        </button>

        {/* Search */}
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

        {/* Icons: Kirish, Yurak, Savat */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-700 transition cursor-pointer">
            <Image src={user} alt="Kirish" width={28} height={28} />
            <p>Kirish</p>
          </div>

          <div
            className="flex flex-col items-center text-sm text-gray-700 cursor-pointer"
            onClick={() => setIsFavModalOpen(true)}
          >
            <Image src={yurak} alt="Sevimlilar" width={28} height={28} />
            <p>Sevimlilar ({favorites.length})</p>
          </div>

          <div
            className="flex flex-col items-center text-sm text-gray-700 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Image src={shop} alt="Savatcha" width={28} height={28} />
            <p>Savatcha ({cart.length})</p>
          </div>
        </div>
      </div>

      {/* Katalog Madal */}
      <KatalogMadal katalog={katalog} setKatalog={setKatalog} />

      {/* Savatcha Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-96 max-h-[80vh] overflow-auto p-6 rounded-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Savatcha</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">Savatchada hech narsa yo'q.</p>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <p className="text-gray-800">{item.name}</p>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      O‘chirish
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition"
            >
              Yopish
            </button>
          </div>
        </div>
      )}

      {/* Sevimlilar Modal */}
      {isFavModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-96 max-h-[80vh] overflow-auto p-6 rounded-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Sevimlilar</h2>
            {favorites.length === 0 ? (
              <p className="text-gray-600">Sevimlilarda mahsulot yo‘q.</p>
            ) : (
              <div className="space-y-3">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <p className="text-gray-800">{item.name}</p>
                    <button
                      onClick={() => handleToggleFavorite(item)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      O‘chirish
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => setIsFavModalOpen(false)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavCenter;
