/* eslint-disable react/no-unescaped-entities */
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* {upper elements} */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Greetings, <br /> I'm Yevhenii.
          </motion.span>

          {/* {cv} */}
          <motion.a
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.email}
            href="https://drive.google.com/uc?export=download&id=18YoAw962WatK2moG4QQr7CeGAJySSPGu"
            download
          >
            <img src="./images/cv.png" alt="Download" width="90" />
          </motion.a>
        </div>

        {/* {person image} */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1)}
            src="./images/person.jpeg"
            alt=""
            width="500"
          />
          <div className={css.caption}>FRONT-END DEVELOPER</div>
        </motion.div>

        {/* {lower elements} */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.social}
          >
            <div className="primaryText"></div>
            <div className="secondaryText">
              <a href="https://www.linkedin.com/in/lymarenko/" target="blank">
                <img
                  src="./images/linkedin.png"
                  alt="LinkedIn"
                  width="50"
                  style={{ marginRight: "15px" }}
                />
              </a>
              <a href="https://github.com/YevheniiLi" target="blank">
                <img src="./images/github.png" alt="LinkedIn" width="50" />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.cerificate}
          >
            <img src="./images/certificate.png" alt="" />
            <span style={{ marginBottom: "5px" }}>MATERIALS ENGINEER</span>
            <span>CERTIFIED FULL STACK ENGINEER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
