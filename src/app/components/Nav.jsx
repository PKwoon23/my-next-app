'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

function Nav() {
  const pathname = usePathname();

  // state สำหรับเก็บว่ามีการคลิกเมนูครั้งแรกหรือยัง
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    // ถ้า pathname ไม่ใช่หน้าแรก "/" แสดงว่ามีการเข้าหน้าจริง ให้ active เลย
    if (pathname !== '/') {
      setHasClicked(true);
    }
  }, [pathname]);

  const handleClick = () => {
    setHasClicked(true); // กดปุ๊บถือว่าเริ่มใช้งาน
  };

  const isActive = (link) => {
    if (!hasClicked) return ''; // ถ้ายังไม่คลิก ไม่มี active ใด ๆ
    return pathname === link ? styles.active : '';
  };

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            onClick={handleClick}
            className={`${styles.navLink} ${isActive('/')}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            onClick={handleClick}
            className={`${styles.navLink} ${isActive('/products')}`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={handleClick}
            className={`${styles.navLink} ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={handleClick}
            className={`${styles.navLink} ${isActive('/about')}`}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;