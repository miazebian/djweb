import React, { useState } from "react";
import "../css/pages/Contact.css";
import video2 from "../assets/videos/v2.mp4";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    partnerFirstName: "",
    partnerLastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventLocation: "",
    eventTime: "",
    eventBudget: "",
    eventType: "",
    eventDetails: "",
    hearAboutUs: "",
  });

  const [isLoading, setIsLoading] = useState(false); // To track loading state
const [modalMessage, setModalMessage] = useState(""); // To show message in modal
const [modalType, setModalType] = useState(""); // To track success or error type
const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsLoading(true); // Show loading state
    setModalType("loading");
    setModalMessage(t("contact.modal.sendingMessage"));
  
    const emailBody = `
      <h3>Contact Form Submission</h3>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Event Date:</strong> ${formData.eventDate}</p>
      <p><strong>Event Location:</strong> ${formData.eventLocation}</p>
      <p><strong>Event Time:</strong> ${formData.eventTime}</p>
      <p><strong>Event Budget:</strong> ${formData.eventBudget}</p>
      <p><strong>Event Type:</strong> ${formData.eventType}</p>
      <p><strong>Event Details:</strong> ${formData.eventDetails}</p>
      <p><strong>How did you hear about us?</strong> ${formData.hearAboutUs}</p>
    `;
  
    // Prepare data for Sendinblue API
    const requestBody = {
      sender: { email: "DjParce.nc@gmail.com" },
      to: [{ email: "DjParce.nc@gmail.com" }],
      subject: "New Contact Form Submission",
      htmlContent: emailBody,
    };
  
    try {
      const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "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", // Replace with your API key
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        console.log(response);
        setIsLoading(false); // Hide loading state
        setModalType(t("contact.modal.Success"));
        setModalMessage(t("contact.modal.successMessage"));
      } else {
        setIsLoading(false); // Hide loading state
        setModalType(t("contact.modal.Error"));
        setModalMessage(t("contact.modal.errorMessage"));
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false); // Hide loading state
      setModalType(t("contact.modal.Error"));
      setModalMessage(t("contact.modal.errorMessage"));
    }
    
    setIsModalOpen(true); // Show modal
  };

  return (
    <div>
      <div className="video-container">
        <video
          id="video-player"
          className="video"
          src={video2}
          type="video/mp4"
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
        />
        <div className="video-text-container">
          <div className="video-text">{t("contact.title")}</div>
          <div className="video-text-mini">{t("home.services")}</div>
        </div>
      </div>
      <div className="contact-page-container">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.intro")}</p>

        <div className="contact-page-content">
          <div className="contact-form-section">
            <h2 className="cursive-text2">DJ Parce</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-section">
                <h2>{t("contact.form.contactInformation")}</h2>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.firstName")} <span className="required">*</span>:
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.lastName")} <span className="required">*</span>:
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.email")} <span className="required">*</span>:
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-label">
                  <span className="label-text">{t("contact.form.phone")}:</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-section">
                <h2>{t("contact.form.eventDetails")}</h2>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.eventDate")} <span className="required">*</span>:
                  </span>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.eventLocation")} <span className="required">*</span>:
                  </span>
                  <input
                    type="text"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.eventTime")} <span className="required">*</span>:
                  </span>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-label">
                  <span className="label-text">{t("contact.form.eventBudget")}:</span>
                  <input
  type="number"
  name="eventBudget"
  value={formData.eventBudget}
  onChange={handleChange}
  min="0"  // Ensures only positive numbers (including zero) are entered
  step="1"  // Optional: allows decimal numbers (e.g., 10.99)
  placeholder="Enter budget"
/>

                </label>

                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.eventType")} <span className="required">*</span>:
                  </span>
                  <select
  name="eventType"
  value={formData.eventType}
  onChange={handleChange}
  required
>
  <option value="">{t("contact.form.selectEventType")}</option>
  {["wedding", "private", "school", "corporate", "holiday", "nightlife", "fitness"].map((event) => (
    <option value={event} key={event}>
      {t(`contact.events.${event}`)}
    </option>
  ))}
  <option value="Other">{t("contact.form.other")}</option>
</select>

                </label>
                <label className="form-label">
                  <span className="label-text">
                    {t("contact.form.eventDetails")} <span className="required">*</span>:
                  </span>
                  <textarea
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="form-section">
                <h2>{t("contact.form.additionalInformation")}</h2>
                <label className="form-label">
                  <span className="label-text">{t("contact.form.hearAboutUs")}:</span>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                  >
                    <option value="">{t("contact.form.selectOption")}</option>
                    <option value="Social Media">{t("contact.form.socialMedia")}</option>
                    <option value="Friend or Family">{t("contact.form.friendFamily")}</option>
                    <option value="Online Search">{t("contact.form.onlineSearch")}</option>
                    <option value="Other">{t("contact.form.other")}</option>
                  </select>
                </label>
              </div>
              <button type="submit" className="submit-button">{t("contact.directContact.submit")}</button>
            </form>
          </div>


          <div className="contact-info-section">
  <h2>{t("contact.directContact.title")}</h2>
  <p>
    {t("contact.directContact.email")}{" "}
    <a
      href={`mailto:${t("contact.contactInfo.email")}?subject=Event Inquiry&body=Hello, I would like to inquire about hosting an event. My details are as follows...`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("contact.contactInfo.email")}
    </a>
  </p>
  <p>
  {t("contact.directContact.social.instagram")}{" "}
  <a
    href={t("contact.contactInfo.social.instagram")}
    target="_blank"
    rel="noopener noreferrer"
  >
    @dj_parce_nc
  </a>
</p>

  {/*}
  <p>
    {t("contact.directContact.social.facebook")}{" "}
    <a
      href={t("contact.contactInfo.social.facebook")}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("contact.contactInfo.social.facebook")}
    </a>
  </p>
  */}
</div>


{isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      {modalType === "loading" ? (
        <>
          <div className="spinner"></div>  {/* Spinner */}
          <h3>{modalMessage}</h3>
        </>
      ) : (
        <>
          <h3>{modalType === "Success!" ? t("contact.modal.Success"): t("contact.modal.Error")}</h3>
          <p>{modalMessage}</p>
        </>
      )}
      {/* Close Button (X) */}
      <button className="close-btn" onClick={() => setIsModalOpen(false)}>X</button>
    </div>
  </div>
)}


        </div>
      </div>
    </div>
  );
}

export default Contact;
