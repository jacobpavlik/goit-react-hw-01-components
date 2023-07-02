import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css[stat.label.slice(1, stat.label.length)]}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.number,
  percentage: PropTypes.number,
};
