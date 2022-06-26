import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import img from "../images/crypto-img.png";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "1",
    icon: <HomeOutlined style={{ fontSize: "20px" }} />,
  },

  {
    label: <Link to="/cryptocurrencies">Crypto-Currencies</Link>,
    key: "2",
    icon: <FundOutlined style={{ fontSize: "20px" }} />,
  },

  {
    label: <Link to="/news">News</Link>,
    key: "3",
    icon: <BulbOutlined style={{ fontSize: "20px" }} />,
  },
];

const Navbar = ({ menu, setMenu }) => {
  
  const Matches = () => {
    const media = window.matchMedia("(max-width: 992px)");

    if (media.matches) {
      setMenu(false);
    }
  };

  return (
    <div className="navcont">
      <div className="navcont-logocont">
        <Avatar src={img} className="userimg" />

        <Typography.Title level={2} className="logo">
          <Link to="/">Krypto-Hub</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setMenu(!menu)}
        >
          {" "}
          <MenuOutlined />
        </Button>
      </div>

      {menu && (
        <Menu
          theme="dark"
          items={items}
          mode="inline"
          onClick={() => Matches()}
        />
      )}
    </div>
  );
};

export default Navbar;
