import "./header.module.css";

export function Header() {
  return (
    <div>
      <header>
        <h1>Covid ID</h1>
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
      </header>
    </div>
  );
}

export default Header;
