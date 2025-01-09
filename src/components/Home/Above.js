import React from "react";
import { FaUser, FaClipboardCheck, FaStar, FaHeadset } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "../../css/components/Above.css";

const Above = () => {
  const { t } = useTranslation(); // Initialize t function for translations

  const features = [
    {
      icon: FaUser,
      color: "var(--above-personal)",
      titleKey: "above.features.personal.title",
      descriptionKey: "above.features.personal.description",
    },
    {
      icon: FaClipboardCheck,
      color: "var(--above-prepared)",
      titleKey: "above.features.prepared.title",
      descriptionKey: "above.features.prepared.description",
    },
    {
      icon: FaStar,
      color: "var(--above-exp)",
      titleKey: "above.features.experience.title",
      descriptionKey: "above.features.experience.description",
    },
    {
      icon: FaHeadset,
      color: "var(--above-att)",
      titleKey: "above.features.attentive.title",
      descriptionKey: "above.features.attentive.description",
    },
  ];

  return (
    <div className="event-container">
      {/* Left Section */}
      <div className="event-left">
        <h1>
          {t("above.header.line1")} <br />
          {t("above.header.line2")} <br />
          {t("above.header.line3")}
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

export default Above;
