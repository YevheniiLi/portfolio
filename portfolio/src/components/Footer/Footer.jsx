import css from "./Footer.module.scss";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the checkmark icon

const Footer = () => {
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
        // Сброс состояния полей формы и кнопки
        setIsSent(false);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3500);
    };
  
    // Функция для обновления значений полей ввода
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  return (
    <div className={css.wrapper}>
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <h5 className="primaryText">Contact me</h5>
        </div>
        <div className={`flexCenter ${css.group}`}>
          <div className={css.contact}>
            <article className={css.social}>
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>jekilllimarenko@gmail.com</h5>
              <a href="mailto:jekilllimarenko@gmail.com">Send a message</a>
            </article>
            <article className={css.social}>
              <RiMessengerLine />
              <h4>Messanger</h4>
              <h5>Yevhenii Lymarenko</h5>
              <a href="https://m.me/eugenelimarenko">Send a message</a>
            </article>
            <article className={css.social}>
              <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+34 692 14 22 47</h5>
              <a href="https://api.whatsapp.com/send?phone=+34692142247">Send a message</a>
            </article>
          </div>
          <form action="">
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
          className={`${css.button} ${
            isClicked ? css.onclic : ''
          } ${isSubmitted ? css.validate : ''}`}
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
