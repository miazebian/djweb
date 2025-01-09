import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import "../../css/components/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
          const { t } = useTranslation();
    
  return (
    <footer className="footer-container1">
      {/* Social Icons */}
      <div className="footer-social-icons1">
     {/*}
        <a href={t("contact.contactInfo.social.facebook")} target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        */}
        <a href={t("contact.contactInfo.social.instagram")} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Contact Information */}
      <div className="footer-contact1">
        <ul className="footer-list1">
        <li>
            <FaMapMarkerAlt className="footer-icon" />
            <span className="footer-location">{t("footer.location")}</span>
          </li>
          <li>
          <a
  href="mailto:DjParce.nc@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link1"
>
  <FaEnvelope className="footer-icon" />
  <span className="footer-email">{t("contact.contactInfo.email")}</span>
</a>

            </li>
        </ul>
      </div>

      <div className="footer-copyright">
  <p>
    &copy; {t("footer.copyright")} |
    <a
  href="mailto:mianajwazebian@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    color: getComputedStyle(document.documentElement).getPropertyValue('--border'),
    paddingLeft: "5px",
  }}
>
  {t("footer.created")}
</a>


  </p>
</div>
    </footer>
  );
};

export default Footer;
