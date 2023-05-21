import { Button, Tooltip, Menu, Space, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function SiteHeader() {
  const headerStyle = {
    color: "#3a4759",
    paddingInline: "24px",
    backgroundColor: "#fff",
  };
  const tabs = [
    {
      label: <a href="/">Home</a>,
      key: "home",
    },
    {
      label: <a href="/">Tags</a>,
      key: "tags",
    },
    {
      label: <a href="/">Categories</a>,
      key: "categories",
    },
  ];
  const [tab, setTab] = useState("mail");
  const onTabClicked = (e) => {
    console.log("click ", e);
    setTab(e.key);
  };

  return (
    <div style={headerStyle}>
      <Row align="middle">
        <Col lg={6} md={24} sm={24} xs={24}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Space>
              <h1>Cnachen's Blog</h1>
            </Space>
          </div>
        </Col>
        <Col lg={18} md={24} sm={24} xs={24}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Space>
              <Menu
                onClick={onTabClicked}
                selectedKeys={[tab]}
                mode="horizontal"
                items={tabs}
              />
              <Tooltip title="search">
                <Button
                  type="default"
                  shape="circle"
                  icon={<SearchOutlined />}
                ></Button>
              </Tooltip>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
}
