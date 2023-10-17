import css from './Hero.module.scss'
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'

const Hero = () => {
  return (
<section className={`paddings ${css.wrapper}`}>
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{once: true, amount: 0.25}}
    className={`innerWidth ${css.container}`}>

        {/* {upper elements} */}
        <div className={css.upperElements}>
            <motion.span  
            variants={fadeIn("right", "tween", 0.2, 1)}
            className='primaryText'>

                Hey There, <br /> Im Yevhenii.
                </motion.span>
                <motion.span 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className='secondaryText'>
                    I develop beatiful simple 
                    <br />
                    things, And I love what i do
                </motion.span>
        </div>

{/* {person image} */}
        <motion.div 
        variants={fadeIn("up", "tween", 0.3, 1)}
        className={css.person}>
            <motion.img
        variants={slideIn("up", "tween", 0.5, 1)}
            src="./person.png" alt='' />
        </motion.div>

        {/* {email} */}
        <motion.a
        variants={fadeIn("right", "tween", 0.3, 1)}
        className={css.email} href="mailto:jekilllimarenko@gmail.com">
        jekilllimarenko@gmail.com
        </motion.a>

{/* {lower elements} */}
        <div className={css.lowerElements}>
            <motion.div 
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}>
                <div className="primaryText">2</div>
                <div className="secondaryText">
                    <div>Year</div>
                    <div>Expereince</div>
                </div>

            </motion.div>
            <motion.div 
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.cerificate}>
                <img src="./certificate.png" alt=""/>
                <span>CERTIFIED PROFFESIONAL</span>
                <span>FULL STACK DEVELOPER</span>
            </motion.div>
        </div>

    </motion.div>
</section>  )
}

export default Hero