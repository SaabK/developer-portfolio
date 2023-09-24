import { social } from "../data/data";

function Footer() {
  return (
    <footer className="container flex padding-block-sm" id="footer">
      <p className="logo">Jonathon Specter</p>
      <ul role="list" aria-label="social media icons" className="flex">
        {social.map((social, index) => (
          <li key={index}>
            <a href={social.href}>
              <img src={social.image} alt={social.name} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
