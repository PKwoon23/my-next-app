'use client';

import Nav from "../components/Nav"; 
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <Nav />

      <h1 className={styles.title}><b>ช่องทางการติดต่อ</b></h1>

      <div className={styles.contactContainer}>
        {/* ข้อมูลการติดต่อ */}
        <div className={styles.info}>
          <p><strong>Facebook:</strong> jiofjois</p>
          <p><strong>Phone:</strong> +66 1234 5678</p>
          <p><strong>Email:</strong> info@example.com</p>
        </div>

        {/* ฟอร์มส่งข้อความ */}
        <form className={styles.form}>
          <input type="text" placeholder="ชื่อของคุณ" required />
          <input type="email" placeholder="อีเมลของคุณ" required />
          <textarea placeholder="ข้อความของคุณ" rows="4" required />
          <button type="submit">ส่งข้อความ</button>
        </form>
      </div>
    </main>
  );
}