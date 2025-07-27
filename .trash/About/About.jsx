// import css from "./About.module.scss";

// import { motion } from "framer-motion";
// import { staggerContainer, slideIn } from "../../utils/motion";
// import { WhatDoIHelp } from "../../utils/data";

// const About = () => {
//   return (
//     <section className={css.wrapper}>
//       <a className="anchor" id="experties"></a>
//       <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
//         <motion.div
//           className={css.leftSide}
//           variants={staggerContainer(0.25, 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.25 }}
//         >
//           <span className="primaryText">About me</span>
//           {WhatDoIHelp.map((paragraph, i) => (
//             <motion.span
//               className="secondaryText"
//               key={i}
//               variants={slideIn("right", "spring", 0.3 + i * 0.3, 0.7)}
//             >
//               {paragraph}
//             </motion.span>
//           ))}
//         </motion.div>
//         <div className={css.rightSide}>
//           <motion.img
//             className="about-image"
//             variants={{
//               hidden: { opacity: 0, scale: 0.85, x: 40 },
//               show: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", duration: 1.2 } }
//             }}
//             src="./images/about.jpeg"
//             alt="Yevhenii Lymarenko portrait"
//             style={{ objectFit: "cover", borderRadius: "10%", boxShadow: "0 4px 24px rgba(40,111,108,0.12)" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
