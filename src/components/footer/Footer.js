import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer calssName={styles.footer}>
      <div>
        <h1>Covid ID</h1>
        Developed by aufaroot18
      </div>
      <nav>
        <ul>
          <li>
            <a href=".">Global</a>
          </li>
          <li>
            <a href=".">Indonesia</a>
          </li>
          <li>
            <a href=".">Provinsi</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
