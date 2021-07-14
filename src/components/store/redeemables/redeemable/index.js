import Scene from './gravity_scene';
import styles from './redeemable.module.css';

const Redeemable = ({ xx, columns, rows, title, description }) => {
  return (
    <div className={styles.grandParent}>
      <div className={styles.parent}>
        <Scene xx={xx} columns={columns} rows={rows} />
        <div className={styles.zIndex}>
          <h3 className={styles.rewardTitle}>{title}</h3>
          <p className={styles.rewardDescription}>{description}</p>
          <button className="btn-border">redeem</button>
        </div>
      </div>
    </div>
  );
};

export default Redeemable;
