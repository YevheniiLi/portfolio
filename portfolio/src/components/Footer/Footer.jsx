import css from "./Footer.module.scss";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
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
              <MdOutlineEmail style={{ color: 'red' }} />
              <h4>Email</h4>
              <h5>jekilllimarenko@gmail.com</h5>
              <a href="mailto:jekilllimarenko@gmail.com">Contact via Email</a>
            </article>
            <article className={css.social}>
              <RiMessengerLine style={{ color: 'violet' }} />
              <h4>Messanger</h4>
              <h5>Yevhenii Lymarenko</h5>
              <a href="https://m.me/eugenelimarenko">Message on Messenger</a>
            </article>
            <article className={css.social}>
              <BsWhatsapp style={{ color: '#25D366' }} />
              <h4>WhatsApp</h4>
              <h5>+34 692 14 22 47</h5>
              <a href="https://api.whatsapp.com/send?phone=+34692142247">Chat on WhatsApp</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
