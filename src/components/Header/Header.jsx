
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  // burger menu state removed
  const headerShadow = useHeaderShadow();

  return (
    <>
      <a className="anchor" id="home"></a>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: true, amount: 0.25 }}
        className={`bg-primary paddings ${css.wrapper}`}
        style={{ boxShadow: headerShadow }}
      >
        <a className="anchor" id="home"></a>

        <div className={`flexCenter innerWidth ${css.container}`}>
          <div className={css.name}>
            Code & Design
          </div>
          <ul
            className={`flexCenter ${css.menu}`}
          >
            <li>
              <a href="#home">About me</a>
            </li>
            <li>
              <a href="#work">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#people">Testimonials</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          {/* burger menu removed for all screen sizes */}
        </div>
      </motion.div>
    </>
  );
};

export default Header;
