import { FunctionComponent } from "react";
import styles from "./Loading.module.css";

const Loading: FunctionComponent = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
