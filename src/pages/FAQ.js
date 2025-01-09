import React, { useEffect, useState } from "react";
import "../css/pages/FAQ.css";
import ParallexSection from '../components/Home/ParallaxSection';
import { useTranslation } from "react-i18next";
import image1 from '../assets/images//SubEvents/Weddings/Wedding10.jpeg'

import image from '../assets/images//SubEvents/Weddings/Wedding1jpg.jpg'
import { useNavigate } from "react-router-dom";
import StaticImage from '../components/StaticImage';

const FAQ = () => {
    const { t } = useTranslation(); // Using i18next for translation
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "faq.question1",
            answer: "faq.answer1"
        },
        {
            question: "faq.question2",
            answer: "faq.answer2"
        },
        {
            question: "faq.question3",
            answer: "faq.answer3"
        },
        {
            question: "faq.question4",
            answer: "faq.answer4"
        },
        {
            question: "faq.question5",
            answer: "faq.answer5"
        }
    ];

    const halfIndex = Math.ceil(faqData.length / 2);
    const column1 = faqData.slice(0, halfIndex);
    const column2 = faqData.slice(halfIndex);

  const navigate = useNavigate();
  const [isIphone, setIsIphone] = useState(false);

  // Function to detect if the user is on an iPhone
  const checkIfIphone = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPhone/i.test(userAgent)) {
      setIsIphone(true);
    }
  };

  useEffect(() => {
    checkIfIphone(); // Check on initial load
    window.addEventListener("resize", checkIfIphone); // Recheck on resize

    return () => {
      window.removeEventListener("resize", checkIfIphone); // Cleanup on unmount
    };
  }, []);

    const handleButtonClick = () => {
        navigate("/contact"); // Navigate to the path provided in NavText
    };

    return (
        <div>
            <StaticImage imageSrc={image1} text={t('faq.contact.header')} />
            <div className="faq-container">
                <div className="faq-text">
                    <h1>{t('faq.contact.text1')}</h1>
                    <h3>{t('faq.contact.text2')}</h3>
                    <div>
  <h4 className="inline-text1">{t('faq.contact.text')}</h4>
  <h4
    className="contact-link1"
    onClick={() => window.open('mailto:DjParce.nc@gmail.com', '_blank')}
  >
    {t('faq.contact.linkText')}
  </h4>
</div>

                </div>
                <div className="faq-columns">
                    {[column1, column2].map((column, colIndex) => (
                        <div className="faq-column" key={colIndex}>
                            {column.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <div className="faq-question" onClick={() => toggleQuestion(index + colIndex * halfIndex)}>
                                        <span className="faq-toggle">{activeQuestion === index + colIndex * halfIndex ? "-" : "+"}</span>
                                        <span>{t(item.question)}</span>
                                    </div>
                                    {activeQuestion === index + colIndex * halfIndex && <div className="faq-answer">{t(item.answer)}</div>}
                                    <hr className="faq-divider" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="arrow-down1"></div>
            <div     className={`${isIphone ? "parallax-container1" : "parallax-container"}`} >

                <div
        className={`${isIphone ? "parallax-image1" : "parallax-image"}`} // Conditional class
        style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="parallax-text">
                    <h1>{t('faq.parallax.heading')}</h1>
                    <button onClick={handleButtonClick}>{t('faq.parallax.buttonText')}</button>
                    <h1>{t('faq.parallax.subHeading')}</h1>
                    <button onClick={() => window.open('mailto:DjParce.nc@gmail.com', '_blank')}>
  {t('faq.parallax.buttonTextHelp')}
</button>

                </div>
            </div>
        </div>
    );
};

export default FAQ;
