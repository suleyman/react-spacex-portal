import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ILaunch } from "../../interfaces/ILaunch";
import styles from "./Launch.module.css";

type LaunchProps = {
  launchData: ILaunch;
};

const Launch: FunctionComponent<LaunchProps> = ({ launchData }) => {
  const { id, name, details } = launchData;
  return (
    <Link to={`/detail/${id}`} className={styles.launch}>
      <h5 className="name">{name}</h5>
      <h6 className="description">{details}</h6>
    </Link>
  );
};

export default Launch;
