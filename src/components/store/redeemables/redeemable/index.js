import Scene from './gravity_scene';
import styles from './redeemable.module.css';

const Redeemable = ({ xx, columns, rows, title, description, link }) => {
  return (
    <div className={styles.grandParent}>
      <div className={styles.parent}>
        <Scene xx={xx} columns={columns} rows={rows} />
        <div className={styles.zIndex}>
          <h3 className={styles.rewardTitle}>{title}</h3>
          <p className={styles.rewardDescription}>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-border"
          >
            redeem
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redeemable;
