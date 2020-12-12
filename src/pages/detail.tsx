import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

type ParamTypes = {
  id: string;
};

const Detail: FunctionComponent = () => {
  const { id } = useParams<ParamTypes>();
  return (
    <div className="page-detail">
      <h1>The ID is {id}</h1>
    </div>
  );
};

export default Detail;
