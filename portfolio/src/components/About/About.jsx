import css from "./About.module.scss";
import { WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="experties"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
             <motion.div variants={textVariant(0.5)} className={css.rightSide} style={{ textAlign: 'justify' }}>
          <span className="primaryText" style={{ fontSize: "25px"}} >About me</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className="secondaryText" style={{ fontSize: "15px"}} key={i}>
                {paragraph}
              </span>
            );
          })}
        </motion.div>
        <div className={css.leftSide}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          ></motion.span>
          <motion.img
            variants={fadeIn("left", "tween", 0.4, 1)}
            src="./about.jpeg"
            alt=""
            width="500"
            style={{ borderRadius: "5%", transform: "scaleX(-1)"}}
            />
        </div>
   
      </div>
    </motion.section>
  );
};

export default About;