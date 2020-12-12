import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ILaunch } from "../../interfaces/ILaunch";
import styles from "./Launch.module.css";

type LaunchProps = {
  launchData: ILaunch;
};

const Launch: FunctionComponent<LaunchProps> = ({ launchData }) => {
  const { id, name, details, date_utc, success, upcoming } = launchData;
  return (
    <Link to={`/detail/${id}`} className={styles.launch}>
      <div className={styles.header}>
        <h5 className={styles.name}>{name}</h5>
        {success && <span className="ms-4 badge rounded-pill bg-success">Success</span>}
        {!success && !upcoming && <span className="ms-4 badge rounded-pill bg-danger">Failed</span>}
        {upcoming && <span className="ms-4 badge rounded-pill bg-primary">Upcoming</span>}
        <span className={styles.date}>{formatDate(date_utc)}</span>
      </div>
      {details && <h6 className={styles.description}>{details}</h6>}
    </Link>
  );
};

function formatDate(date: string): string {
  const dateFromString = new Date(date);
  return format(dateFromString, "MM/dd/yyyy");
}

export default Launch;
