'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Nav from "./components/Nav";

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/products');
  };

  return (
    <main className="container mx-auto p-1 ">
      <Nav />
      <div>
        {/* Section ส่วนหัว */}
        <section className="text-center mt-1">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Cat Shop</h1>
          <p className="text-lg text-gray-600 mb-8">
            อาหารแมวพรีเมียม เพื่อสุขภาพดีของแมวคุณ!
          </p>
        </section>

        {/* รูปภาพแมว */}
        <div className="flex justify-center mt-6">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="https://cdn.pixabay.com/photo/2016/05/23/16/51/cat-1410745_1280.jpg"
              alt="อาหารแมว"
              fill
              priority
              className="rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* ปุ่มดูสินค้า */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleClick}
            className="bg-[#2b3d4f] hover:bg-blue-800 text-white text-lg font-medium py-3 px-8 rounded-full transition duration-300 animate-pulse-button"
          >
            ดูสินค้าเลย
          </button>
        </div>
      </div>
    </main>


  );
}