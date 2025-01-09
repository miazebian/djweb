import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaMagic } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FooterBig = () => {
  const { t } = useTranslation();

  const handleReload = (path) => {
    window.location.href = path; // Forces a page reload to the specified path
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <p className="footer-question">{t("footer.question")}</p>
        <h1
          className="footer-header"
          onClick={() => handleReload("/contact")}
          style={{ cursor: "pointer" }}
        >
          {t("footer.header")} <FaMagic className="footer-header-icon" />
        </h1>
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <p className="footer-logo">
            <span
              onClick={() => handleReload("/")}
              className="footer-link"
              style={{ cursor: "pointer" }}
            >
              {t("header.companyname")}
            </span>
          </p>
        </div>
        <div className="info">
          <div className="footer-column">
            <h3 className="footer-title">{t("header.events")}</h3>
            <ul className="footer-list">
              <li>
                <span
                  onClick={() => handleReload("/wedding")}
                  className="footer-link"
                  style={{ cursor: "pointer" }}
                >
                  {t("events.wedding")}
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleReload("/private")}
                  className="footer-link"
                  style={{ cursor: "pointer" }}
                >
                  {t("events.private")}
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleReload("/school")}
                  className="footer-link"
                  style={{ cursor: "pointer" }}
                >
                  {t("events.school")}
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleReload("/events")}
                  className="footer-link seeAll"
                >
                  {t("footer.seeAll")}
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">{t("footer.company")}</h3>
            <ul className="footer-list">
              <li>
                <span
                  onClick={() => handleReload("/about")}
                  className="footer-link"
                  style={{ cursor: "pointer" }}
                >
                  {t("header.about")}
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleReload("/reviews")}
                  className="footer-link"
                  style={{ cursor: "pointer" }}
                >
                  {t("header.reviews")}
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleReload("/faq")}
                  className="footer-link"
                  style={{ cursor: "pointer" }}
                >
                  {t("header.faq")}
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">{t("footer.connect")}</h3>
            <ul className="footer-list">
              <li>
              <a
  href="mailto:DjParce.nc@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link"
>
  <FaEnvelope className="footer-icon" />
  <span className="footer-email">{t("contact.contactInfo.email")}</span>
</a>

              </li>
              <li>
                <span className="footer-location">
                  <FaMapMarkerAlt className="footer-icon" /> {t("footer.compressedLoc")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-social-icons">
      {/*}
        <a
          href={t("contact.contactInfo.social.facebook")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        */}
        <a
          href={t("contact.contactInfo.social.instagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="footer-copyright">
        <p>
          &copy; {t("footer.copyright")} |
          <a
  href="mailto:mianajwazebian@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    color: getComputedStyle(document.documentElement).getPropertyValue("--border"),
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

export default FooterBig;
