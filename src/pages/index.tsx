import React, { FunctionComponent, useState, useEffect } from "react";
import { ILaunch } from "../interfaces/ILaunch";
import LaunchService from "../api/services/launch";
import Launch from "../components/Launch/Launch";

const IndexPage: FunctionComponent = () => {
  const [launches, setLaunches] = useState<ILaunch[]>([]);

  useEffect(() => {
    LaunchService.getAllLaunches().then((response) => {
      setLaunches(response.data);
    });
  }, []);

  return (
    <div className="page-index-page">
      <div className="container">
        <div className="launches row">
          {launches.map((launch) => {
            return (
              <div className="col-lg-12 mb-4" key={launch.id}>
                <Launch launchData={launch} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
