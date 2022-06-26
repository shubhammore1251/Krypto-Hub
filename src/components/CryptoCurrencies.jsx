import React, { useEffect, useState } from "react";
import millify from "millify";
import { Card, Row, Col, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);

  const [cryptos, setCryptos] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) => {
      return coin.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    setCryptos(filterData);
  }, [cryptoList, search]);

  if (isFetching) return <Loader />;

  return (
    <>
      {count > 10 ? (
        <>
          <Typography.Title
            level={2}
            style={{ color: "#431d69", fontWeight: "700" }}
          >
            All Crypto-Currencies
          </Typography.Title>

          <div className="search-coins">
            <Input
              placeholder="Search Currency"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </>
      ) : null}

      <Row gutter={[32, 32]} className="crypcard-cont">
        {cryptos?.map((item) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypcard-cont-card"
            key={item.uuid}
          >
            <Link to={`/crypto/${item.uuid}`}>
              <Card
                title={`${item.rank}. ${item.name}`}
                extra={
                  <img
                    className="cryptoimg"
                    src={item.iconUrl}
                    alt={item.name}
                  />
                }
                hoverable
              >
                <p>Price: $ {millify(item.price)}</p>
                <p>Market Cap: {millify(item.marketCap)}</p>
                <p>Daily Change: {millify(item.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
