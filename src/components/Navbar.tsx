import hamburgerMenu from "../assets/Hamburger Menu.svg";

function Navbar() {
  return (
    <header className="container flex padding-block-sm" id="header">
      <p className="logo">Johnathan Specter</p>

      <nav className="navigation">
        <ul className="flex">
          <li className="nav-link">
            <a href="/articles">Articles</a>
          </li>
          <li className="nav-link">
            <a href="/chats">Chats</a>
          </li>
          <li className="nav-link">
            <a href="/awards">Awards</a>
          </li>
          <li className="nav-link">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

      <img src={hamburgerMenu} className="hamburger" />

      <button className="btn btn-primary">Get in touch</button>
    </header>
  );
}

export default Navbar;
