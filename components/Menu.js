import styles from '../styles/Menu.module.css';
import Link from 'next/link';





function Menu() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Bienvenu dans mon portfolio</span>
      <div className={styles.linkContainer}>
      
        <Link href="/">Home</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Menu;