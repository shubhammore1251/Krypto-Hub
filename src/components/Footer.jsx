import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Krypto-Hub <br />
        &#169; 2022 Krypto-Hub Ltd.
      </Typography.Title>

      <Space>
        <Link to="/">Home &#124;</Link>
        <Link to="/news">News</Link>
      </Space>

      <Space>
        <Typography.Title level={5}>
          Made By &nbsp;&nbsp;
          <a
            href="https://github.com/more1251"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#6bc0e8" }}
          >
            Shubham More
          </a>
        </Typography.Title>
      </Space>
    </>
  );
};

export default Footer;
