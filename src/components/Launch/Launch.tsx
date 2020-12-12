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
      <h5 className="name">
        {name}
        {success == true && <span className="ms-4 badge rounded-pill bg-success">Success</span>}
        {!success && !upcoming && <span className="ms-4 badge rounded-pill bg-danger">Failed</span>}
        {upcoming && <span className="ms-4 badge rounded-pill bg-primary">Upcoming</span>}
      </h5>
      {details && <h6 className={styles.description}>{details}</h6>}
      <span className={styles.date}>{formatDate(date_utc)}</span>
    </Link>
  );
};

function formatDate(date: string): string {
  const dateFromString = new Date(date);
  return format(dateFromString, "MM/dd/yyyy");
}

export default Launch;
