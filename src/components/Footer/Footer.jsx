import css from "./Footer.module.scss";

const Footer = () => {
  
  return (
    <div className={css.wrapper}>
      <a className="anchor" id="contacts"></a>
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <h5 className="primaryText" style={{ color: '#286F6C' }}>Get in touch</h5>
        </div>
        <div className={`flexCenter`}>
          <span className={css.subheading}>
            <span className={css.onlineDot}></span>
            <span style={{ color: '#286F6C', fontFamily: 'Montserrat, Inter, Arial, sans-serif', fontWeight: 500, fontSize: '1.08rem', letterSpacing: '0.02em' }}>
              I&apos;m always available
            </span>
          </span>
        </div>
        <footer className={css.footerDecorWrap}>
          <div className={`flexCenter ${css.group}`} style={{ position: "relative" }}>
            <div className={css.contact}>
              <div className={css.contactItem}>
                <a href="mailto:jekilllimarenko@gmail.com" target="_blank" rel="noreferrer" className={`${css.social} ${css.gmail}`}> 
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 13L4 6V6L12 13L20 6ZM4 18V8L12 15L20 8V18H4Z" fill="#EA4335"/>
                  </svg>
                </a>
                <span className={css.contactLabel}>Email</span>
              </div>
              <span className={css.dotDecor}></span>
              <div className={css.contactItem}>
                <a href="https://t.me/eyeije" target="_blank" rel="noreferrer" className={`${css.social} ${css.telegram}`}> 
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 8L4 22L17 26L20 40L28 32L38 36L44 8Z" stroke="#229ED9" strokeWidth="2" fill="none"/>
                    <path d="M20 40L28 32L17 26L44 8L4 22" stroke="#229ED9" strokeWidth="2" fill="none"/>
                  </svg>
                </a>
                <span className={css.contactLabel}>Telegram</span>
              </div>
              <span className={css.dotDecor}></span>
              <div className={css.contactItem}>
                <a href="tel:+34692142247" target="_blank" rel="noreferrer" className={`${css.social} ${css.whatsapp}`}> 
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.469-.148-.667.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.667-1.611-.914-2.207-.242-.579-.487-.5-.667-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.271-.198-.568-.347z" fill="#25D366"/>
                  </svg>
                </a>
                <span className={css.contactLabel}>WhatsApp</span>
              </div>
            </div>
          </div>
          <div className={css.decorLine}></div>
        </footer>
        </div>
      </div>
  );
};

export default Footer;
