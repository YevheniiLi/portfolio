import css from "./Work.module.scss";
import { workExp } from "../../utils/data";

const Work = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="work"></a>
      <div className={`flexCenter innerWidth ${css.container}`}> 
        <span className={css.workTitle}>Work Experience</span>
        <div className={css.workCardsWrapper}>
          {workExp.map((exp, i) => (
            <div
              className={css.workCard}
              key={i}
              style={{ cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div className={css.workCardHeader}>
                <span className={css.workCardPlace}>{exp.place}</span>
                <span className={css.workCardRole}>{exp.role}</span>
                <span className={css.workCardTenure}>{exp.tenure}</span>
              </div>
              <div className={css.workCardDetail}>
                <p className={css.detailText}>{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
