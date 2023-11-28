import { Button, Row, Col } from "antd";
import Image from "next/image";

export default function Header() {
  // Display Header Navigation bar
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        background: "rgba(255, 255, 255, 0.7)",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Row justify="space-around" align="middle">
        <Col>
          <Image src="/logo.png" width={80} height={80} priority alt="logo" />
        </Col>
        <Col>
          <a href="/">
            <Button type="link" size="large">
              Home
            </Button>
          </a>
        </Col>
        <Col>
          <a href="/aboutus">
            <Button type="link" size="large">
              About
            </Button>
          </a>
        </Col>
        
        <Col>
          <a href="/packages">
            <Button type="link" size="large">
              Upcoming Packages
            </Button>
          </a>
        </Col>
        <Col>
          <a href="/hotels">
            <Button type="link" size="large">
              Hotels
            </Button>
          </a>
        </Col>
        <Col>
          <Button type="primary" size="large">
            Connect with Us
          </Button>
        </Col>
      </Row>
    </div>
  );
}
