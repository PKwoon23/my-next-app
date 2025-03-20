import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';  // << Import CSS Module

function Nav() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li><Link href='/' className={styles.navLink}>Home</Link></li>
        <li><Link href='/products' className={styles.navLink}>Products</Link></li>
        <li><Link href='/contact' className={styles.navLink}>Contact</Link></li>
        <li><Link href='/about' className={styles.navLink}>About</Link></li>
      </ul>
    </div>
  );
}

export default Nav;