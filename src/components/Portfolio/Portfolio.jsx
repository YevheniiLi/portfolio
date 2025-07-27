import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";



const projects = [
  {
    img: "./images/chat.png",
    title: "Chat App",
    stack: ["React", "SCSS", "Socket.io"],
    desc: "Real-time chat with modern UI, authentication and notifications.",
    demo: "https://chat-demo.example.com",
    code: "https://github.com/YevheniiLi/chat-app"
  },
  {
    img: "./images/maps.jpeg",
    title: "Maps Service",
    stack: ["React", "Leaflet", "SCSS"],
    desc: "Interactive maps, geolocation, route planning and search.",
    demo: "https://maps-demo.example.com",
    code: "https://github.com/YevheniiLi/maps-service"
  },
  {
    img: "./images/trailer.jpeg",
    title: "Movie Trailer",
    stack: ["React", "Redux", "API"],
    desc: "Browse and watch movie trailers, search and save favorites.",
    demo: "https://trailer-demo.example.com",
    code: "https://github.com/YevheniiLi/movie-trailer"
  }
];

const Portfolio = () => {
  // определяем цвет для заголовка по проекту (градиент)
  const headingStyle = {
    background: "linear-gradient(90deg, #EEC048 0%, #286F6C 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth ${css.container}`}> 
        <motion.div
          variants={textVariant(0.4)}
          className={css.heading}
        >
          <span className={css.primaryText} style={headingStyle}>Selected Projects</span>
          <span className={css.subTitle}>Best web apps & UI/UX cases</span>
        </motion.div>
        <motion.div className={css.projectsGrid} variants={staggerChildren}>
          {projects.map((p, i) => (
            <motion.div
              className={css.projectCard}
              key={i}
              variants={fadeIn("up", "tween", 0.2 + i * 0.18, 0.7)}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(40,111,108,0.13)" }}
              style={{ cursor: "pointer" }}
            >
              <div className={css.projectImgWrap}>
                {p.title === "Chat App" && (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="16" fill="#EEC048"/>
                    <path d="M16 36V22C16 19.7909 17.7909 18 20 18H36C38.2091 18 40 19.7909 40 22V32C40 34.2091 38.2091 36 36 36H28L22 40V36H20C17.7909 36 16 34.2091 16 32Z" fill="#286F6C"/>
                  </svg>
                )}
                {p.title === "Maps Service" && (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="16" fill="#286F6C"/>
                    <circle cx="28" cy="28" r="12" fill="#EEC048"/>
                    <path d="M28 20V28L34 32" stroke="#286F6C" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                )}
                {p.title === "Movie Trailer" && (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="16" fill="#EEC048"/>
                    <polygon points="22,18 40,28 22,38" fill="#286F6C"/>
                  </svg>
                )}
              </div>
              <div className={css.projectInfo}>
                <div className={css.projectTitle}>{p.title}</div>
                <div className={css.projectStack}>{p.stack.join(" · ")}</div>
                <div className={css.projectDesc}>{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className={css.githubProjects}>
          <a
            href="https://github.com/YevheniiLi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={css.allReposBtn}
          >
            All Repositories
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
