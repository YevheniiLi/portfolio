import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
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
          <div className={css.name}>YEVHENII.</div>
          <ul
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#experties">About me</a>
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
          {/* {for medium and small screens} */}
          <div
            className={css.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
