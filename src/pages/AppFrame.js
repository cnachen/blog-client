import { Layout, Card, Row, Col } from "antd";
import Counter from "../others/Counter";
import Hitokoto from "../components/Hitokoto";
import AboutMe from "../components/AboutMe";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import Tags from "../components/Tags";
import Categories from "../components/Categories";

export default function AppFrame(props) {
  const { Content } = Layout;

  const cardStyle = {
    // width: "100%",
    textAlign: "left",
    margin: "10px 10px 10px 10px",
  };

  const contentStyle = {
    padding: "10px 10px 10px 10px",
    textAlign: "left",
    minHeight: "100vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  return (
    <Layout>
      <SiteHeader />
      <Layout>
        <Content style={contentStyle}>
          <Row justify="center">
            <Col
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Card type="inner" hoverable title="About me" style={cardStyle}>
                  <AboutMe></AboutMe>
                </Card>
                <Card
                  type="inner"
                  hoverable
                  title="Categories"
                  style={cardStyle}
                >
                  <Categories></Categories>
                </Card>

                <Card type="inner" hoverable title="Counter" style={cardStyle}>
                  <Counter></Counter>
                </Card>
              </div>
            </Col>
            <Col
              lg={{ span: 12, order: 2 }}
              md={{ span: 18, order: 2 }}
              sm={{ span: 24, orde: 1 }}
              xs={{ span: 24, orde: 1 }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {props.children}
              </div>
            </Col>
            <Col
              lg={{ span: 6, order: 3 }}
              md={{ span: 24, order: 3 }}
              sm={{ span: 24, order: 3 }}
              xs={{ span: 24, order: 3 }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Card type="inner" hoverable title="Hitokoto" style={cardStyle}>
                  <Hitokoto></Hitokoto>
                </Card>
                <Card type="inner" hoverable title="Tags" style={cardStyle}>
                  <Tags></Tags>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <SiteFooter />
    </Layout>
  );
}
