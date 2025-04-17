"use client";
import Image from "next/image";
import Link from "next/link";
import { CardsDataType } from "@/type/Types";
import savat from "../assets/icons/shop.svg";
import yurak from "../assets/icons/yurak.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { addToFavorites } from "@/redux/favoriteSlice";

function ProductCard({
  item,
  isFavorite,
}: {
  item?: CardsDataType;
  isFavorite?: boolean;
}) {
  if (!item) {
    return (
      <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>
    );
  }

  const dispatch = useDispatch();

  const handleAddToCart = (item: CardsDataType) => {
    dispatch(addToCart(item));
  };

  const handleAddToFavorites = (item: CardsDataType) => {
    dispatch(addToFavorites(item));
  };

  return (
    <div className="bg-white mt-12 shadow-md rounded-lg p-4 max-w-[250px] mb-5 flex flex-col justify-between relative">
      <button
        onClick={() => handleAddToFavorites(item)}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md"
      >
        <Image
          src={isFavorite ? yurak : yurak}
          alt="Sevimlilar"
          width={24}
          height={24}
        />
      </button>

      <Link href={`/pradakt/${item.id}`}>
        <div>
          {item.imageUrl ? (
            <Image
              width={230}
              height={260}
              src={item.imageUrl}
              alt={item.name || "Mahsulot"}
              className="mx-auto rounded-lg object-cover h-70 w-full"
            />
          ) : (
            <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">Rasm yo‘q</p>
            </div>
          )}
          <p className="text-gray-700 text-sm line-clamp-2 mt-2">
            {item.description || "Tavsif mavjud emas"}
          </p>
        </div>
      </Link>

      <div className="mt-4">
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-semibold text-gray-900">
            {item.price ? `$${item.price}` : "Narx noma’lum"}
          </p>
          <button
            onClick={() => handleAddToCart(item)}
            className="border-2 border-blue-400 p-2 rounded-md hover:bg-blue-100 cursor-pointer"
          >
            <Image width={30} height={30} src={savat} alt="savat" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
