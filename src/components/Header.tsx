import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="/images/logo.png"
                        alt="Urfa Mutfak Kültürü Logo"
                        width={50}
                        height={50}
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>Urfa Mutfak Kültürü</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Ana Sayfa</Link>
                    <Link href="/tarifler" className={styles.navLink}>Tarifler</Link>
                    <Link href="/hikayeler" className={styles.navLink}>Hikayeler</Link>
                </nav>
            </div>
        </header>
    );
}
