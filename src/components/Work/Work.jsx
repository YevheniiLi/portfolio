

import css from "./Work.module.scss";
import { motion } from "framer-motion";
import { workExp } from "../../utils/data";

const Work = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="work"></a>
      <div className={`flexCenter innerWidth ${css.container}`}> 
        <motion.span
          className={css.workTitle}
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.span>
        <div className={css.workCardsWrapper}>
          {workExp.map((exp, i) => (
            <motion.div
              className={css.workCard}
              key={i}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={css.workCardHeader}>
                <span className={css.workCardPlace}>{exp.place}</span>
                <span className={css.workCardRole}>{exp.role}</span>
                <span className={css.workCardTenure}>{exp.tenure}</span>
              </div>
              <div className={css.workCardDetail}>
                <p className={css.detailText}>{exp.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
