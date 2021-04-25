import scss from './Section.module.scss';

const Section = ({ title, children }) => (
  <section className={scss.section}>
    {title && <h2 className={scss.title}> {title}</h2>}

    {children}
  </section>
);

export default Section;
