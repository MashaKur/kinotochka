import "./footer.css";
import telegram from "../../images/telegram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-info">© 2021 KinoTochka.com</p>
        <img src={telegram} className="telegram" />
      </div>
    </footer>
  );
}

export default Footer;
