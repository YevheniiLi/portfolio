import css from "./MainSection.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { WhatDoIHelp } from "../../utils/data";

const MainSection = () => {
  return (
    <section className={css.wrapper}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        className={css.container}
      >
        <div className={css.leftBlock}>
          <motion.img
            variants={fadeIn("up", "tween", 0.2, 1)}
            src="./images/person.jpeg"
            alt="Yevhenii Lymarenko"
            className={css.heroPhoto}
          />
          <motion.h1
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.heroTitle}
          >
            Yevhenii Lymarenko
          </motion.h1>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className={css.heroSubtitle}
          >
            Front-End Developer
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={css.heroActions}
          >
            <a
              className={css.heroCv}
              href="https://drive.google.com/uc?export=download&id=18YoAw962WatK2moG4QQr7CeGAJySSPGu"
              download
            >
              Download CV
            </a>
            <div className={css.heroSocials}>
              <a href="https://www.linkedin.com/in/lymarenko/" target="_blank" rel="noopener noreferrer">
                <img src="./images/linkedin.png" alt="LinkedIn" width="56" height="56" />
              </a>
              <a href="https://github.com/YevheniiLi" target="_blank" rel="noopener noreferrer">
                <img src="./images/github.png" alt="GitHub" width="56" height="56" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className={css.rightBlock}>
          <span className={css.aboutTitle}>About me</span>
          {WhatDoIHelp.map((paragraph, i) => (
            <motion.span
              className={css.aboutText}
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.3, type: "spring" }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MainSection;
