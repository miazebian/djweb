import React from "react";
import { FaUsers, FaMusic, FaBatteryFull, FaCameraRetro } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "../../css/components/Above.css";

const Above2 = () => {
  const { t } = useTranslation(); // Initialize t function for translations

  const features = [
    {
      icon: FaUsers,
      color: "var(--above-collaboration)",
      titleKey: "above2.features.collaboration.title",
      descriptionKey: "above2.features.collaboration.description",
    },
    {
      icon: FaMusic,
      color: "var(--above-quality)",
      titleKey: "above2.features.music.title",
      descriptionKey: "above2.features.music.description",
    },
    {
      icon: FaBatteryFull,
      color: "var(--above-energy)",
      titleKey: "above2.features.energy.title",
      descriptionKey: "above2.features.energy.description",
    },
    {
      icon: FaCameraRetro,
      color: "var(--above-capture)",
      titleKey: "above2.features.capture.title",
      descriptionKey: "above2.features.capture.description",
    },
  ];

  return (
    <div className="event-container">
      {/* Left Section */}
      <div className="event-left">
        <h1>
          {t("above2.header.line1")} <br />
          {t("above2.header.line2")} <br />
          {t("above2.header.line3")}
        </h1>
      </div>

      {/* Right Section */}
      <div className="event-right">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {React.createElement(feature.icon, { size: 30, color: feature.color })}
            </div>
            <h3 className="feature-title">{t(feature.titleKey)}</h3>
            <p className="feature-description">{t(feature.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Above2;
