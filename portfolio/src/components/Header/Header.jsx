import css from './Header.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import { useState } from 'react';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import {CgPhone} from 'react-icons/cg';

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
  <li><a href="#experties">Services</a></li>
  <li><a href="#work">Experience</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#people">Reviews</a></li>
  <li className={`flexCenter ${css.phone}`}>
    <p>+34 (692) 14 22 47</p>
    <CgPhone size={"40px"} />
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