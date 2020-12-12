import React, { FunctionComponent, useState, useEffect } from "react";
import { ILaunch } from "../interfaces/ILaunch";
import LaunchService from "../api/services/launch";
import Launch from "../components/Launch/Launch";
import Loading from "../components/Loading/Loading";

const IndexPage: FunctionComponent = () => {
  const [launches, setLaunches] = useState<ILaunch[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    LaunchService.getAllLaunches().then((response) => {
      setLaunches(response.data.reverse());
      setLoading(false);
    });
  }, []);

  return (
    <div className="page-index-page">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="launches row">
            {launches.map((launch) => {
              return (
                <div className="col-lg-12 mb-4" key={launch.id}>
                  <Launch launchData={launch} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
