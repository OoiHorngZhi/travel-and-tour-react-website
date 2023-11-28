"use client";
import { Button, Row, Col, Flex, Input, Space, Typography } from "antd";
import Image from "next/image";
import {
  LinkedinFilled,
  MessageOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export default function Footer() {
  // Display company hyperlinks and subscription information on footer
  return (
    <Row justify="space-around" style={{ marginTop: 20, marginBottom: 20 }}>
      {/* Company & Social Media Logo */}
      <Col>
        <Flex vertical gap="large">
          <Image src="/logo.png" width={80} height={80} priority alt="logo" />
          <Text type="secondary">
            Travel helps companies manage payments easily.
          </Text>
          <Flex gap="large">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled style={{ fontSize: "30px", cursor: "pointer" }} />
            </a>
            <a
              href="https://www.messenger.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </a>
            <a
              href="http://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </a>
          </Flex>
        </Flex>
      </Col>
      <Col>
        <Flex vertical gap="large">
          <h2>Company</h2>
          <a>About Us</a>
          <a>Careers</a>
          <a>Blog</a>
          <a>Pricing</a>
        </Flex>
      </Col>
      <Col>
        <Flex vertical gap="large">
          <h2>Destinations</h2>
          <a>Maldives</a>
          <a>Los Angelas</a>
          <a>Las Vegas</a>
          <a>Torronto</a>
        </Flex>
      </Col>
      {/* Subscribe form */}
      <Col>
        <Flex vertical gap="large">
          <h2>Join Our Newsletter</h2>
          <Space.Compact>
            <Input placeholder="Your email address" size="large" />
            <Button type="primary" size="large">
              Subscribe
            </Button>
          </Space.Compact>
          <Text type="secondary">
            *Will send you weekly updates for your better tour packages
          </Text>
        </Flex>
      </Col>
    </Row>
  );
}
