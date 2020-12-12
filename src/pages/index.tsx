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
      <h1>Index Page</h1>
      <div className="launches">
        {launches.map((launch) => {
          return <Launch launchData={launch} key={launch.id} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
