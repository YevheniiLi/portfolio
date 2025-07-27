

import css from "./Work.module.scss";
import { motion } from "framer-motion";
import { workExp } from "../../utils/data";

const Work = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="work"></a>
      <div className={`flexCenter innerWidth ${css.container}`}> 
        <span className={css.workTitle}>Work Experience</span>
        <div className={css.workCardsWrapper}>
          {workExp.map((exp, i) => (
            <motion.div
              className={css.workCard}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
