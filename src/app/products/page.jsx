import Link from 'next/link';
import Nav from '../components/Nav';
import products from '../data/products'; 
import Image from 'next/image';
import styles from './products.module.css'; // import css module

export default function ProductsPage() {
  return (
    <div className={styles.container}>
        <Nav />
        <br/><br/>
      <h1 className={styles.title}><b>สินค้าอาหารแมว</b></h1>

      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <h2 className={styles.productName}>{product.name}</h2>
            <div className={styles.imageWrapper}>
            <Image className={styles.Image}
              src={product.images}
              alt='รูปสินค้า'
              width={300}
              height={300}
            />
            </div>
            <p className={styles.productPrice}>ราคา: {product.price} บาท</p>
            <Link href={`/products/${product.id}`} className={styles.detailLink}>
              ดูรายละเอียด
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
