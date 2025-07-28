import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import css from "./Reviews.module.scss";

const reviews = [
  {
    name: "Anna Petrova",
    role: "Product Manager",
    text: "Очень крутой сайт! Дизайн современный, навигация удобная, всё работает быстро.",
    avatar: "A"
  },
  {
    name: "Ivan Ivanov",
    role: "Frontend Developer",
    text: "Портфолио вдохновляет! Анимации плавные, структура понятная, проекты впечатляют.",
    avatar: "I"
  },
  {
    name: "Yulia Bondarenko",
    role: "UI/UX Designer",
    text: "Минимализм и стиль — то, что нужно! Особенно понравился раздел с работами.",
    avatar: "Y"
  }
];

export default function Reviews() {
  const intervalRef = useRef();
  const [active, setActive] = React.useState(0);

  // автопрокрутка
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // ручное листание
  const goPrev = () => setActive(prev => (prev - 1 + reviews.length) % reviews.length);
  const goNext = () => setActive(prev => (prev + 1) % reviews.length);

  return (
    <section className={css.wrapper}>
      <div className={css.heading}>Отзывы</div>
      <div className={css.slider}>
        <button className={css.arrowLeft} onClick={goPrev} aria-label="Предыдущий отзыв">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M20 8L12 16L20 24" stroke="#286F6C" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className={css.card}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={i === active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            style={{ zIndex: i === active ? 2 : 1 }}
          >
            <div className={css.avatar}>{r.avatar}</div>
            <div className={css.text}><span className={css.quote}>“</span>{r.text}<span className={css.quote}>”</span></div>
            <div className={css.author}>{r.name}</div>
            <div className={css.role}>{r.role}</div>
          </motion.div>
        ))}
        <button className={css.arrowRight} onClick={goNext} aria-label="Следующий отзыв">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M12 8L20 16L12 24" stroke="#286F6C" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
      </div>
    </section>
  );
}
