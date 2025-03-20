import Nav from "../components/Nav";
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <Nav />

      <h1 className={styles.title}>เกี่ยวกับโปรเจกต์นี้</h1>

      <div className={styles.content}>
        <p>
          เว็บไซต์นี้เป็นโปรเจกต์ตัวอย่างที่พัฒนาด้วย <strong className={styles.strongText}>Next.js</strong> และ <strong className={styles.strongText}>React </strong>
          มีวัตถุประสงค์เพื่อใช้แสดงผลงานและทักษะการพัฒนาเว็บไซต์ในตำแหน่ง Frontend Developer
        </p>


        <hr className={styles.separator} />

        <p className={styles.featuresTitle}>
          ฟีเจอร์หลักของเว็บ:
        </p>
        <ul className={styles.ulList}>
          <li>แสดงรายการสินค้า (สินค้าในที่นี้เป็นตัวอย่างอาหารแมว)</li>
          <li>ดูรายละเอียดสินค้าแต่ละรายการ</li>
          <li>ระบบนำทาง (Navigation) ระหว่างหน้า</li>
        </ul>

        <p>
          โปรเจกต์นี้เป็นเพียงตัวอย่างการพัฒนาเว็บ ไม่ได้มีการขายสินค้าจริงแต่อย่างใด
        </p>
      </div>
    </main>
  );
}
