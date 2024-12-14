import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers = 0, views = 0, likes = 0 },
}) {
  return (
    <div className={styles.userCard}>
      <div>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={styles.userStats}>
        <li className={styles.userStatsItems}>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li className={styles.userStatsItems}>
          <span>Views:</span>
          <span>{views}</span>
        </li>

        <li className={styles.userStatsItems}>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
