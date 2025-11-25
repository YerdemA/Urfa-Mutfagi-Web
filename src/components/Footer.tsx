import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.text}>&copy; {new Date().getFullYear()} Urfa Mutfak Kültürü. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
}
