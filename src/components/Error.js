import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error {err.status}</h1>
      <h2>{err.message}</h2>
    </div>
  );
};

export default Error;
