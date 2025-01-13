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
    services: ["dj"], // Default value with 'dj' selected
    serviceDetails: "", // Non-required field for additional service details
    chairType: '',
    tableType: '',
    chairCount: 0,
    tableCount: 0,
    barGuests: 0,
    alcoholTypes: [],
    customAlcoholType: '',
    tentSize: "",
  customTentSize: "",
  tentCount: "",
  meats: [], // Array of selected meats
  salads: [], // Array of selected salads
  appetizers: [], // Array of selected appetizers
  desserts: [], // Array of selected desserts
  customMenu: "", // Custom menu text if undecided
  limoPeople: "", // Number of people for limo or party bus
  limoOrBus: "", // Choice of limo or party bus
  facePaintingPeople: "", // Number of people for face painting
  });


  
  const [isLoading, setIsLoading] = useState(false); // To track loading state
const [modalMessage, setModalMessage] = useState(""); // To show message in modal
const [modalType, setModalType] = useState(""); // To track success or error type
const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility

const handleChange = (e) => {
  const { name, value, type, checked, options } = e.target;

  if (name === "services") {
    const selectedServices = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prevFormData => {
      const newServices = prevFormData.services.includes(value)
        ? prevFormData.services.filter(service => service !== value)
        : [...prevFormData.services, value];

      return { ...prevFormData, [name]: newServices };
    });
  } else if (name === 'alcoholTypes') {
    const selectedAlcoholTypes = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prevFormData => {
      const newAlcoholTypes = prevFormData.alcoholTypes.includes(value)
        ? prevFormData.alcoholTypes.filter(alcoholType => alcoholType !== value)
        : [...prevFormData.alcoholTypes, value];

      return { ...prevFormData, [name]: newAlcoholTypes };
    });
  } else if (name === "meats") {
    const selectedMeats = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prevFormData => {
      const newMeats = prevFormData.meats.includes(value)
        ? prevFormData.meats.filter(meat => meat !== value)
        : [...prevFormData.meats, value];

      return { ...prevFormData, [name]: newMeats };
    });
  } else if (name === "salads") {
    const selectedSalads = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prevFormData => {
      const newSalads = prevFormData.salads.includes(value)
        ? prevFormData.salads.filter(salad => salad !== value)
        : [...prevFormData.salads, value];

      return { ...prevFormData, [name]: newSalads };
    });
  } else if (name === "appetizers") {
    const selectedAppetizers = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prevFormData => {
      const newAppetizers = prevFormData.appetizers.includes(value)
        ? prevFormData.appetizers.filter(appetizer => appetizer !== value)
        : [...prevFormData.appetizers, value];

      return { ...prevFormData, [name]: newAppetizers };
    });
  } else if (name === "desserts") {
    const selectedDesserts = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prevFormData => {
      const newDesserts = prevFormData.desserts.includes(value)
        ? prevFormData.desserts.filter(dessert => dessert !== value)
        : [...prevFormData.desserts, value];

      return { ...prevFormData, [name]: newDesserts };
    });
  } else if ( name === "limoPeople" || name === "facePaintingPeople" || name === "limoOrBus") {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  } else {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }
};



const generateEmailBody = () => {
  return `
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
    <p><strong>Selected Services:</strong> ${formData.services.join(', ')}</p>
    
    ${formData.services.includes("chairs") ? `
      <p><strong>Chair Type:</strong> ${formData.chairType || "Not specified"}</p>
      <p><strong>Number of Chairs:</strong> ${formData.chairCount || "Not specified"}</p>
    ` : ""}
    
    ${formData.services.includes("chairs") ? `
      <p><strong>Table Type:</strong> ${formData.tableType || "Not specified"}</p>
      <p><strong>Number of Tables:</strong> ${formData.tableCount || "Not specified"}</p>
    ` : ""}
    
    ${formData.services.includes("tents") ? `
      <p><strong>Tent Size:</strong> ${formData.tentSize || "Not specified"}</p>
      ${formData.tentSize === "Other" ? `<p><strong>Custom Tent Size:</strong> ${formData.customTentSize || "Not specified"}</p>` : ""}
      <p><strong>Number of Tents:</strong> ${formData.tentCount || "Not specified"}</p>
    ` : ""}
    
    ${formData.services.includes("alcohol") ? `
      <p><strong>Alcohol Types:</strong> ${formData.alcoholTypes.length > 0 ? formData.alcoholTypes.join(", ") : "Not specified"}</p>
    ` : ""}
    
      ${formData.services.includes("catering") ? `
      <p><strong>Meats:</strong> ${formData.meats.length > 0 ? formData.meats.join(", ") : "Not specified"}</p>
      <p><strong>Salads:</strong> ${formData.salads.length > 0 ? formData.salads.join(", ") : "Not specified"}</p>
      <p><strong>Appetizers:</strong> ${formData.appetizers.length > 0 ? formData.appetizers.join(", ") : "Not specified"}</p>
      <p><strong>Desserts:</strong> ${formData.desserts.length > 0 ? formData.desserts.join(", ") : "Not specified"}</p>
      ${formData.customMenu && formData.customMenu !== "" ? `<p><strong>Custom Menu:</strong> ${formData.customMenu}</p>` : ""}
    ` : ""}

    ${formData.services.includes("limos & party buses") ? `
      <p><strong>Number of People for Limos & Party Buses:</strong> ${formData.limoPeople || "Not specified"}</p>
      <p><strong>Choice of Limo or Party Bus:</strong> ${formData.limoOrBus || "Not specified"}</p>
    ` : ""}

    ${formData.services.includes("face painting") ? `
      <p><strong>Number of People for Face Painting:</strong> ${formData.facePaintingPeople || "Not specified"}</p>
    ` : ""}

    <p><strong>Additional Service Details:</strong> ${formData.serviceDetails || "Not specified"}</p>
  `;
};



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsLoading(true); // Show loading state
    setModalType("loading");
    setModalMessage(t("contact.modal.sendingMessage"));
  
    const emailBody = generateEmailBody();

  
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

                <label className="form-label">
  <span className="label-text">
    {t("contact.form.services")}:
  </span>
  <select
    name="services"
    multiple
    required
    value={formData.services}
    onChange={handleChange}
  >
    <option value="dj">{t("contact.form.dj")}</option>
    <option value="venues">{t("contact.form.venues")}</option>
    <option value="catering">{t("contact.form.catering")}</option>
    <option value="bar">{t("contact.form.bar")}</option>
    <option value="chairs">{t("contact.form.chairs")}</option>
    <option value="tents">{t("contact.form.tents")}</option>
    <option value="photography">{t("contact.form.photography")}</option>
    <option value="limos & party buses">{t("contact.form.limos")}</option>
    <option value="face painting">{t("contact.form.painting")}</option>

  </select>
</label>




<div>
{formData.services.includes("chairs") && (
<div className="form-section">

    <h3>{t("contact.form.chairs")}</h3>
    
    {/* Chair Type Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectChairType")} <span className="required">*</span>:
      </span>
      <select name="chairType" value={formData.chairType} onChange={handleChange} required>
        <option value="">{t("contact.form.selectChairType")}</option>
        <option value="Chiavari">{t("contact.form.chiavariChairs")}</option>
        <option value="Barstools">{t("contact.form.barstools")}</option>
        <option value="Folding">{t("contact.form.foldingChairs")}</option>
        <option value="Kids Seating">{t("contact.form.kidsSeating")}</option>
        <option value="Undecided">{t("contact.form.undecided")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* If "Other" is selected, show custom input */}
    {formData.chairType === "Other" && (
      <label className="form-label">
        <span className="label-text">
          {t("contact.form.specifyChairType")} <span className="required">*</span>:
        </span>
        <input
          type="text"
          name="customChairType"
          value={formData.chairType}
          onChange={handleChange}
          required
        />
      </label>
    )}

    {/* Number of Chairs */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.numberOfChairs")}:
      </span>
      <input
        type="number"
        name="chairCount"
        value={formData.chairCount}
        onChange={handleChange}
        min="0"
      />
    </label>
  </div>
)}
  {/* Tables Section */}
  {formData.services.includes("chairs") && (
    <div className="form-section">
      <h3>{t("contact.form.tables")}</h3>
    
      {/* Table Type Dropdown */}
      <label className="form-label">
        <span className="label-text">
          {t("contact.form.selectTableType")} <span className="required">*</span>:
        </span>
        <select name="tableType" value={formData.tableType} onChange={handleChange} required>
          <option value="">{t("contact.form.selectTableType")}</option>
          <option value="Round Pedestal">{t("contact.form.roundPedestal")}</option>
          <option value="Pedestal">{t("contact.form.pedestal")}</option>
          <option value="Kid-Friendly">{t("contact.form.kidFriendlySeating")}</option>
          <option value="Farm Tables">{t("contact.form.farmTables")}</option>
          <option value="Picnic Tables">{t("contact.form.picnicTables")}</option>
          <option value="Rectangular">{t("contact.form.rectangular")}</option>
          <option value="Conference Tables">{t("contact.form.conferenceTables")}</option>
          <option value="Serpentine Tables">{t("contact.form.serpentineTables")}</option>
          <option value="Bar-height Table Tops">{t("contact.form.barHeightTables")}</option>
          <option value="Other">{t("contact.form.other")}</option>
        </select>
      </label>

      {/* If "Other" is selected, show custom input */}
      {formData.tableType === "Other" && (
        <label className="form-label">
          <span className="label-text">
            {t("contact.form.specifyTableType")} <span className="required">*</span>:
          </span>
          <input
            type="text"
            name="customTableType"
            value={formData.tableType}
            onChange={handleChange}
            required
          />
        </label>
      )}

      {/* Number of Tables */}
      <label className="form-label">
        <span className="label-text">
          {t("contact.form.numberOfTables")}:
        </span>
        <input
          type="number"
          name="tableCount"
          value={formData.tableCount}
          onChange={handleChange}
          min="0"
        />
      </label>
    </div>
  )}

{/* Tables Section */}
{formData.services.includes("bar") && (
  <div className="form-section">
    <h3>{t("contact.form.bar")}</h3>

    {/* Number of Guests (Optional) */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.numberOfGuests")}: 
      </span>
      <input
        type="number"
        name="barGuests"
        value={formData.barGuests}
        onChange={handleChange}
      />
    </label>

    {/* Alcohol Types Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectAlcoholTypes")} <span className="required">*</span>:
      </span>
      <select
        name="alcoholTypes"
        value={formData.alcoholTypes}
        onChange={handleChange}
        required
        multiple
      >
        <option value="">{t("contact.form.selectAlcoholTypes")}</option>
        <option value="Beer">{t("contact.form.beer")}</option>
        <option value="Wine">{t("contact.form.wine")}</option>
        <option value="Whiskey">{t("contact.form.whiskey")}</option>
        <option value="Vodka">{t("contact.form.vodka")}</option>
        <option value="Rum">{t("contact.form.rum")}</option>
        <option value="Gin">{t("contact.form.gin")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* If "Other" is selected, show custom input */}
    {formData.alcoholTypes.includes("Other") && (
      <label className="form-label">
        <span className="label-text">
          {t("contact.form.specifyAlcoholType")} <span className="required">*</span>:
        </span>
        <input
          type="text"
          name="customAlcoholType"
          value={formData.customAlcoholType}
          onChange={handleChange}
          required
        />
      </label>
    )}
  </div>
)}

{/* Tents Section */}
{formData.services.includes("tents") && (
  <div className="form-section">
    <h3>{t("contact.form.tents")}</h3>

    {/* Tent Size Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectTentSize")}:
      </span>
      <select
        name="tentSize"
        value={formData.tentSize}
        onChange={handleChange}
      >
        <option value="">{t("contact.form.selectTentSize")}</option>
        <option value="Small">{t("contact.form.small")}</option>
        <option value="Medium">{t("contact.form.medium")}</option>
        <option value="Large">{t("contact.form.large")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* If "Other" is selected, show custom input */}
    {formData.tentSize === "Other" && (
      <label className="form-label">
        <span className="label-text">
          {t("contact.form.specifyTentSize")}:
        </span>
        <input
          type="text"
          name="customTentSize"
          value={formData.customTentSize}
          onChange={handleChange}
        />
      </label>
    )}

    {/* Number of Tents */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.numberOfTents")}:
      </span>
      <input
        type="number"
        name="tentCount"
        value={formData.tentCount}
        onChange={handleChange}
        min="0"
      />
    </label>
  </div>
)}


{formData.services.includes("limos & party buses") && (
    <div>
       <label>
       {t("contact.form.limo/bus")}:
       <select name="limoOrBus" value={formData.limoOrBus} onChange={handleChange}>
          <option value="">        {t("contact.form.Chooselimoorbus")}:
          </option>
          <option value="limo"> {t("contact.form.chooselimo")}</option>
          <option value="party bus"> {t("contact.form.choosebus")}</option>
        </select>
      </label>
      <label>
      {t("contact.form.limo/buspeoplenb")}      <input
          type="number"
          name="limoPeople"
          value={formData.limoPeople}
          onChange={handleChange}
          min="0"  // Ensures only positive numbers (including zero) are entered
  step="1" 
        />
      </label>
    </div>
  )}


{formData.services.includes("face painting") && (
    <div>
      <label>
      {t("contact.form.paintingpeoplenb")}:        <input
          type="number"
          name="facePaintingPeople"
          value={formData.facePaintingPeople}
          onChange={handleChange}
          min="0"  // Ensures only positive numbers (including zero) are entered
          step="1" 
        />
      </label>
    </div>
  )}

{/* Catering Section */}
{formData.services.includes("catering") && (
  <div className="form-section">
    <h3>{t("contact.form.catering")}</h3>

    {/* Meats Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectMeats")}:
      </span>
      <select
        name="meats"
        value={formData.meats}
        onChange={handleChange}
        multiple
      >
        <option value="Chicken">{t("contact.form.chicken")}</option>
        <option value="Beef">{t("contact.form.beef")}</option>
        <option value="Pork">{t("contact.form.pork")}</option>
        <option value="Fish">{t("contact.form.fish")}</option>
        <option value="Lamb">{t("contact.form.lamb")}</option>
        <option value="Turkey">{t("contact.form.turkey")}</option>
        <option value="Duck">{t("contact.form.duck")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* Salads Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectSalads")}:
      </span>
      <select
        name="salads"
        value={formData.salads}
        onChange={handleChange}
        multiple
      >
        <option value="Caesar Salad">{t("contact.form.caesarSalad")}</option>
        <option value="Greek Salad">{t("contact.form.greekSalad")}</option>
        <option value="Coleslaw">{t("contact.form.coleslaw")}</option>
        <option value="Caprese Salad">{t("contact.form.capreseSalad")}</option>
        <option value="Potato Salad">{t("contact.form.potatoSalad")}</option>
        <option value="Pasta Salad">{t("contact.form.pastaSalad")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* Appetizers Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectAppetizers")}:
      </span>
      <select
        name="appetizers"
        value={formData.appetizers}
        onChange={handleChange}
        multiple
      >
        <option value="Bruschetta">{t("contact.form.bruschetta")}</option>
        <option value="Spring Rolls">{t("contact.form.springRolls")}</option>
        <option value="Cheese Platter">{t("contact.form.cheesePlatter")}</option>
        <option value="Stuffed Mushrooms">{t("contact.form.stuffedMushrooms")}</option>
        <option value="Mini Quiches">{t("contact.form.miniQuiches")}</option>
        <option value="Meatballs">{t("contact.form.meatballs")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* Desserts Dropdown */}
    <label className="form-label">
      <span className="label-text">
        {t("contact.form.selectDesserts")}:
      </span>
      <select
        name="desserts"
        value={formData.desserts}
        onChange={handleChange}
        multiple
      >
        <option value="Chocolate Cake">{t("contact.form.chocolateCake")}</option>
        <option value="Fruit Tart">{t("contact.form.fruitTart")}</option>
        <option value="Ice Cream">{t("contact.form.iceCream")}</option>
        <option value="Cheesecake">{t("contact.form.cheesecake")}</option>
        <option value="Brownies">{t("contact.form.brownies")}</option>
        <option value="Cupcakes">{t("contact.form.cupcakes")}</option>
        <option value="Other">{t("contact.form.other")}</option>
      </select>
    </label>

    {/* Custom Menu if "Other" is selected */}
    {(formData.meats.includes("Other") || formData.salads.includes("Other") ||
    formData.appetizers.includes("Other") ||
      formData.desserts.includes("Other")) && (
      <label className="form-label">
        <span className="label-text">
          {t("contact.form.customMenu")}:
        </span>
        <textarea
          name="customMenu"
          value={formData.customMenu}
          onChange={handleChange}
          placeholder={t("contact.form.customMenuPlaceholder")}
        />
      </label>
    )}
  </div>
)}




</div>


<label className="form-label">
  <span className="label-text">
    {t("contact.form.serviceDetails")}:
  </span>
  <textarea
    name="serviceDetails"
    value={formData.serviceDetails}
    onChange={handleChange}
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
