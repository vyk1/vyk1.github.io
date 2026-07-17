import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Victoria Botelho Martins</span>
      <div className={styles.links}>
        <a href="https://github.com/vyk1" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/vyk1" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="http://lattes.cnpq.br/6294297168242307" target="_blank" rel="noopener noreferrer">
          Lattes
        </a>
      </div>
    </footer>
  );
}
