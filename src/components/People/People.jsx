/* eslint-disable react/no-unescaped-entities */
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

const People = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>
      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People talk about me</span>
          <p style={{ marginTop: "2rem" }}>
            People I've worked with have said some nice things...
          </p>
        </div>

        {/* {carousel slider} */}
        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider} autoplay={true}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>

                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
