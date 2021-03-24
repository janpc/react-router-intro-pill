import React from "react";
import {useParams } from "react-router-dom";

function ErrorPage() {
    const errors = ["Page notfound", "Error loading data"];
    const {errorId} = useParams();
  return (
    <div className="d-flex">
      {errors[errorId]}
    </div>
  );
}

export default ErrorPage;