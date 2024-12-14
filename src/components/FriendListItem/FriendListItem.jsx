import clsx from "clsx";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx(styles.status, {
          [styles.online]: isOnline,
          [styles.ofline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
}
