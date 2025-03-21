import Image from "next/image";
import Nav from "./components/Nav";

export default function HomePage() {
  return (
    <main className="container mx-auto p-6 bg-gray-50">
      <Nav />
      <hr className="my-3 border-gray-300" /> <br />
      <h3 className="text-4xl font-semibold text-center text-gray-800">Cat Shop</h3>
      <p className="text-lg text-center text-gray-600 mt-3">
        เติมความสุขให้แมวของคุณ กับอาหารที่ดีที่สุดจากเรา! 🍽️🐾
      </p>

      <div className="flex justify-center mt-6">
        <Image
          src="https://cdn.pixabay.com/photo/2016/05/23/16/51/cat-1410745_1280.jpg"
          width={1200}  // ขนาดภาพต้นฉบับ
          height={800}  // สัดส่วนของภาพ
          priority
          alt="cat image"
          className="rounded-lg shadow-lg"
          style={{ objectFit: "cover" }} // ทำให้ภาพรักษาสัดส่วนและไม่บิดเบือน
        />
      </div>
    </main>
  );
}
