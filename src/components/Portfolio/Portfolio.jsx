import css from './Portfolio.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className='primaryText'>My Latest Work</span>
          </div>
        </motion.div>

        {/* {images} */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./images/chat.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./images/maps.jpeg" alt="project" />
          <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./images/trailer.jpeg" alt="project" />
        </div>

        {/* GitHub projects */}
        <div className={`flexCenter secondaryText ${css.githubProjects}`}>
          <a href="https://github.com/YevheniiLi?tab=repositories" target="_blank" rel="noopener noreferrer">
            All Repositories
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
