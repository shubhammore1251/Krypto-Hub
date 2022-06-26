import React from "react";
import { Spin } from "antd";

const Loader = () => {
  const loaderStyle = {
    margin: "20px 0",
    marginBottom: "20px",
    padding: "50px 50px",
    textAlign: "center",
    borderRadius: "4px",
  };

  return (
    <div style={loaderStyle}>
      <Spin />
    </div>
  );
};

export default Loader;
