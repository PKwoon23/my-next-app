import products from '../../data/products';
import styles from './productDetail.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/app/components/Nav';

// generateStaticParams สำหรับ SSG
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({ params }) {
  // ต้อง await ก่อนใช้ params
  const { id } = await params;

  // หา product โดยเช็ค id เป็น string 
  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <p className={styles.notFound}>ไม่พบสินค้านี้</p>;
  }

  return (
    <main className="container mx-auto p-6 bg-white min-h-screen pt-20">
    <div className={styles.container}>
        
      <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.imageWrapper}>
             <Image
        src={product.images}
        alt={product.name}
        width={300}
        height={300}
      />
        </div>
     

      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>ราคา: {product.price} บาท</p>

      <Link href="/products" className={styles.backLink}>
        กลับไปหน้าสินค้า
      </Link>
    </div>
    </main>
  );
}