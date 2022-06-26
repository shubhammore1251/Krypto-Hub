import React, { useState } from "react";
import { Select, Typography, Card, Row, Col, Avatar } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptoQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import altImg from "../images/altimg.jpg";

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data } = useGetCryptoQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 25,
  });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <>
      {!simplified ? (
        <div>
          <Title level={2} style={{ color: "#431d69", fontWeight: "700" }}>
            All Crypto News
          </Title>

          <Col span={24}>
            <Select
              showSearch
              className="news-select"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>

              {data?.data?.coins?.map((currency, i) => (
                <Option value={currency.name} key={i}>
                  {currency.name}
                </Option>
              ))}
            </Select>
          </Col>
        </div>
      ) : null}

      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-card-imgcont">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || altImg}
                    alt={news.name}
                  />
                </div>

                <p>
                  {news.description.length > 150
                    ? `${news.description.substring(0, 150)}...`
                    : news.description}
                </p>

                <div className="news-card-provider">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail.contentUrl || altImg
                      }
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name.length > 12
                        ? `${news.provider[0]?.name.substring(0, 12)}...`
                        : news.provider[0]?.name}
                    </Text>
                  </div>

                  <Text style={{}}>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
