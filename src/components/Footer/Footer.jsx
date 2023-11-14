import css from "./Footer.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Import the checkmark icon
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oybnjpq",
      "template_ogmc7h9",
      form.current,
      "4g6wne_TfkxwNmITn"
    );
    e.target.reset();
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      setIsSent(true);
    }, 2250);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSent(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={css.wrapper}>
      <a className="anchor" id="contacts"></a>
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <h5 className="primaryText">Contact me</h5>
        </div>
        <div className={`flexCenter ${css.group}`}>
          <div className={css.contact}>
            <article className={css.social}>
              <a href="mailto:jekilllimarenko@gmail.com" target="blank">
                <img src="./images/gmail.png" alt="Email" width="30" />
              </a>
              <h4>Gmail</h4>
              <a href="mailto:jekilllimarenko@gmail.com" target="blank">
                Contact via Gmail
              </a>
            </article>
            <article className={css.social}>
              <a href="https://t.me/eyeije" target="blank">
                <img src="./images/telegram.png" alt="Telegram" width="30" />
              </a>
              <h4>Telegram</h4>
              <a href="https://t.me/eyeije" target="blank">
                Write me on Telegram
              </a>
            </article>
            <article className={css.social}>
              <a href="tel:+34692142247" target="blank">
                <img src="./images/whatsapp.png" alt="WhatsApp" width="30" />
              </a>
              <h4>WhatsApp</h4>
              <a href="tel:+34692142247" target="blank">
                Call on WhatsApp
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className={`${css.button} ${isClicked ? css.onclic : ""} ${
                isSubmitted ? css.validate : ""
              }`}
              onClick={handleClick}
            >
              {isSent ? <FontAwesomeIcon icon={faCheck} /> : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
