import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import Loader from "./Loader";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptoQuery(10);
  const TotalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  const stats = [
    {
      id: 1,
      title: "Total Crypto-Currencies",
      value: TotalStats.total,
    },
    {
      id: 2,
      title: "Total Exchanges",
      value: TotalStats.totalExchanges,
    },
    {
      id: 3,
      title: "Total Market Cap",
      value: millify(TotalStats.totalMarketCap, {
        space: true,
      }),
    },
    {
      id: 4,
      title: "Total 24H Volume",
      value: millify(TotalStats.total24hVolume, {
        space: true,
      }),
    },
    {
      id: 5,
      title: "Total Markets",
      value: millify(TotalStats.totalMarkets, {
        space: true,
      }),
    },
  ];

  return (
    <>
      <Title
        level={2}
        style={{ color: "#431d69", fontWeight: "700" }}
        className="homepage-heading"
      >
        World-wide Crypto figures
      </Title>

      <Row>
        {stats.length > 0 &&
          stats.map((item) => {
            return (
              <Col span={12} key={item.id}>
                <Statistic title={item.title} value={item?.value} />
              </Col>
            );
          })}
      </Row>

      <div className="heading-cont">
        <Title level={2} className="heading-cont-title">
          Top 10 Crypto-Currencies world-wide
        </Title>
        <Title level={3} className="heading-cont-showmore">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>

      <CryptoCurrencies simplified />

      <div className="heading-cont">
        <Title level={2} className="heading-cont-title">
          Top News Related to Crypto
        </Title>
        <Title level={3} className="heading-cont-showmore">
          <Link to="/news">Show More</Link>
        </Title>
      </div>

      <News simplified />
    </>
  );
};

export default HomePage;
