import { Row, Col, Divider } from "antd";

export default function FlexPage() {
  const headerStyle = {
    height: "64px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const contentStyle = {
    height: "512px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Row align="middle">
        <Col md={6} sm={24} xs={24} style={{ backgroundColor: "#f00" }}>
          <div style={headerStyle}>One</div>
        </Col>
        <Col md={12} sm={12} xs={12} style={{ backgroundColor: "#0f0" }}>
          <div style={headerStyle}>Two</div>
        </Col>
        <Col md={6} sm={12} xs={12} style={{ backgroundColor: "#00f" }}>
          <div style={headerStyle}>Three</div>
        </Col>
      </Row>
      <Divider>Content</Divider>
      <Row align="middle">
        <Col md={{span: 6, order: 1}} sm={{span: 12, order: 1}} xs={{span: 24, order: 2}} style={{ backgroundColor: "#f00" }}>
          <div style={contentStyle}>One</div>
        </Col>
        <Col md={{span: 12, order: 2 }} sm={{span: 12, order: 2}} xs={{span: 24, order: 1}} style={{ backgroundColor: "#0f0" }}>
          <div style={contentStyle}>Two</div>
        </Col>
        <Col md={{span: 6, order: 3}} sm={{span: 24, order: 3}} xs={{span: 24, order: 3}} style={{ backgroundColor: "#00f" }}>
          <div style={contentStyle}>Three</div>
        </Col>
      </Row>
      <Divider>Footer</Divider>
      <Row align="bottom">
        <Col md={12} sm={24} xs={24} style={{ backgroundColor: "#0f0" }}>
          <div style={headerStyle}>Left</div>
        </Col>
        <Col md={12} sm={24} xs={24} style={{ backgroundColor: "#00f" }}>
          <div style={headerStyle}>Right</div>
        </Col>
      </Row>
    </>
  );
}
