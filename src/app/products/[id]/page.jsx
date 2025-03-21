import products from '../../data/products';
import styles from './productDetail.module.css';
import Image from 'next/image';
import Link from 'next/link';

// generateStaticParams สำหรับ SSG
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// ใช้ async function ตาม Next.js App Router
export default async function ProductDetail({ params }) {
  // ต้อง await ก่อนใช้ params
  const { id } = await params;

  // หา product โดยเช็ค id เป็น string เสมอ
  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <p className={styles.notFound}>ไม่พบสินค้านี้</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>

      <Img
        src={product.images}
        alt={product.name}
        width={300}
        height={300}
      />

      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>ราคา: {product.price} บาท</p>

      <Link href="/products" className={styles.backLink}>
        กลับไปหน้าสินค้า
      </Link>
    </div>
  );
}