import Image from "next/image";
import React, { useState } from "react";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import yotube from "../../assets/icons/yotube.svg";
import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";

function Footer() {
    const [karta,setKarta] = useState<{lat:number, long:number}>()
    const state = {
      center: karta? [karta?.lat, karta?.long] : [41.2995 , 69.2401],
      zoom: 5,
    };
  return (
    <footer className="bgCloor text-white py-10">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="flex flex-col gap-4">
          <p>Savolingiz bormi? Qo'ng'iroq qiling</p>
          <a
            href="tel:+998951116050"
            className="hover:text-blue-300 text-2xl font-bold"
          >
            +998 95 111 60 50
          </a>
          <div className="flex gap-3">
            <Image width={40} height={40} src={telegram} alt="Telegram" />
            <Image width={40} height={40} src={instagram} alt="Instagram" />
            <Image width={40} height={40} src={yotube} alt="YouTube" />
          </div>
          <p
            onClick={() => {
              navigator.geolocation.getCurrentPosition((data2) => {
                setKarta({lat:data2.coords.latitude,long:data2.coords.longitude})
              }, (e) => {
                console.log(e)
              });
            }}
            className="font-semibold underline cursor-pointer"
          >
            Do'konlar manzillari
          </p>
          <YMaps>
            <Map
            style={{
                width: 500,
                height: 500
            }}            
            state={state}>
              {karta&&(
                <Placemark geometry={[karta?.lat, karta?.long]} />
              )}
            </Map>
          </YMaps>
          <button
          className="bg-blue-500 p-2 rounded-md"
          onClick={() =>{
            navigator.geolocation.getCurrentPosition((data) => {
                console.log(data);
                setKarta({
                    lat:data.coords.latitude,
                    long:data.coords.longitude
                })
            }, (e) => {
                console.log(e);
                
            })
          }}    
          >Meni top</button>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl mb-2">Kompaniya</h2>
          <p className="hover:underline cursor-pointer">
            Yuridik shaxslar uchun
          </p>
          <p className="hover:underline cursor-pointer">Biz haqimizda</p>
          <p className="hover:underline cursor-pointer">
            Yangiliklar va bloglar
          </p>
          <p className="hover:underline cursor-pointer">IMEI ni tekshirish</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl mb-2">Ma'lumot</h2>
          <p className="hover:underline cursor-pointer">
            Bepul yetkazib berish
          </p>
          <p className="hover:underline cursor-pointer">Texnomartda ishlash</p>
          <p className="hover:underline cursor-pointer">Shaxsiy kabinet</p>
          <p className="hover:underline cursor-pointer">Aloqa raqamlari</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl mb-2">Xaridorga yordam</h2>
          <p className="hover:underline cursor-pointer">Mahsulotni qaytarish</p>
          <p className="hover:underline cursor-pointer">
            Mahsulotlar uchun kafolat
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl mb-2">Ilovani yuklab olish</h2>
          <p className="text-sm text-gray-300">Tez orada mavjud bo'ladi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
