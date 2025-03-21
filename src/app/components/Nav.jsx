'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import styles from './Nav.module.css';         

function Nav() {
  const pathname = usePathname(); // ใช้ดึง path ปัจจุบัน เช่น '/', '/products' เป็นต้น

  // ฟังก์ชันเช็คว่า link นี้ตรงกับ path ปัจจุบันมั้ย ถ้าใช่ return class active ไปใส่
  const isActive = (link) => {
    return pathname === link ? styles.active : '';
  };

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        {/* เมนู Home */}
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive('/')}`} // ถ้า pathname ตรงกับ '/' จะใส่ class active ให้
          >
            Home
          </Link>
        </li>

        {/* เมนู Products */}
        <li>
          <Link
            href="/products"
            className={`${styles.navLink} ${isActive('/products')}`} // ตรง path '/products' ใส่ active
          >
            Products
          </Link>
        </li>

        {/* เมนู Contact */}
        <li>
          <Link
            href="/contact"
            className={`${styles.navLink} ${isActive('/contact')}`} // ตรง path '/contact' ใส่ active
          >
            Contact
          </Link>
        </li>

        {/* เมนู About */}
        <li>
          <Link
            href="/about"
            className={`${styles.navLink} ${isActive('/about')}`} // ตรง path '/about' ใส่ active
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;