import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import { useState } from 'react';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
<motion.div 
initial="hidden"
whileInView="show"
variants={headerVariants}
viewport={{once: true, amount: 0.25}}
className={`bg-primary paddings ${css.wrapper}`
}
style={{boxShadow: headerShadow}}
>
  <div className={`flexCenter innerWidth ${css.container}`}>
    <div className={css.name}>
      Yevhenii
    </div>
    <ul
  style={getMenuStyles(menuOpened)}
  className={`flexCenter ${css.menu}`}
>
  <li><a href="">Services</a></li>
  <li><a href="">Experience</a></li>
  <li><a href="">Portfolio</a></li>
  <li><a href="">Testimonials</a></li>
  <li className={`flexCenter ${css.phone}`}>
    <p>+001 (313) 345 678</p>
    <BiPhoneCall size={"40px"} />
  </li>
</ul>
    {/* {for medium and small screens} */}
    <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
      <BiMenuAltRight size={30} />
    </div>
  </div>
</motion.div>
  )
}

export default Header