"use client";
import React from "react";
import Image from "next/image";
import {
  Button,
  Card,
  Typography,
  Flex,
  Divider,
  Progress,
  Carousel,
} from "antd";

const { Text } = Typography;

// About Us Page
export default function AboutUs() {
  const ContentSection_1 = () => (
    <>
      <div
        style={{
          position: "absolute",
          marginTop: "50vh",
          width: "100%",
          textAlign: "center",
        }}
      >
        <b style={{ color: "white", fontSize: "10vh" }}>About Us</b>
      </div>
      <Image
        src={require("../../../public/aboutus-bg-1.jpg")}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        priority
        alt="bg-1"
      />
    </>
  );

  const ContentSection_2 = () => (
    <Flex justify="space-evenly">
      <Flex vertical style={{ width: "30%" }} gap="middle">
        <h3>PROMOTION</h3>
        <b style={{ fontSize: "4vh" }}>
          We Provide You Best Asia Sightseeing Tours
        </b>
        <Text>
          Journey with local guides who bring their passion and knowledge to
          every tour. Gain insights into the traditions, history, and local way
          of life, creating a richer and more meaningful travel experience.
        </Text>
        <div>
          <Button
            type="primary"
            size="large"
            onClick={() => (window.location.href = "/packages")}
          >
            View Package
          </Button>
        </div>
      </Flex>
      <Image
        src={require("../../../public/aboutus-img-1.jpg")}
        style={{ maxWidth: "45vh", maxHeight: "45vh", borderRadius: "100vh" }}
        priority
        alt="img"
      />
    </Flex>
  );

  const ContentSection_3 = () => (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: "5%",
          marginLeft: "60%",
        }}
      >
        <b style={{ color: "white", fontSize: "10vh" }}>Wanderlust</b>
      </div>
      <Image
        src={require("../../../public/aboutus-img-2.jpg")}
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
        priority
        alt="img"
      />
    </div>
  );

  const ContentSection_4 = () => (
    <Flex justify="space-evenly" style={{ marginBottom: "10vh" }}>
      {/* Left Content */}
      <div style={{ width: "40%" }}>
        <Image
          src={require("../../../public/aboutus-img-3.jpg")}
          style={{
            width: "40vh",
            height: "50vh",
            objectFit: "cover",
            position: "absolute",
            marginTop: "5%",
            marginLeft: "15%",
            borderRadius: "3vh",
          }}
          priority
          alt="img"
        />
        <Image
          src={require("../../../public/aboutus-img-4.jpg")}
          style={{
            width: "40vh",
            height: "50vh",
            marginLeft: "15%",
            borderRadius: "3vh",
          }}
          priority
          alt="img"
        />
      </div>
      {/* Right Content */}
      <Flex vertical style={{ width: "40%" }} gap="middle">
        <b style={{ color: "purple" }}>TREND</b>
        <b style={{ fontSize: "5vh" }}>Our Popular Tour Plans</b>
        <Text>
          lmmerse yourself in the diverse cultures of Asia, exploring ancient
          temples, vibrant markets, and serene landscapes. From the bustling
          streets of Tokyo to the historic charm of Hanoi, this odyssey promises
          cultural riches.
        </Text>
        <Flex gap="large">
          <div>
            <Progress
              type="circle"
              percent={78}
              strokeColor={{ "0%": "#21d4fd", "100%": "#b721ff" }}
            />
            <p style={{ textAlign: "center", fontWeight: "bold" }}>VACATIONS</p>
          </div>
          <div>
            <Progress
              type="circle"
              percent={55}
              strokeColor={{ "0%": "#ffb199", "100%": "#ff0844" }}
            />
            <p style={{ textAlign: "center", fontWeight: "bold" }}>HONEYMOON</p>
          </div>
          <div>
            <Progress
              type="circle"
              percent={33}
              strokeColor={{ "0%": "#9b23ea", "100%": "#5f72bd" }}
            />
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              MUSICAL EVENTS
            </p>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );

  const ContentSection_5 = () => {
    // Render Image carousel
    const RenderImages = ({ img }) => (
      <Image
        src={require(`../../../public/${img}`)}
        style={{ objectFit: "contain" }}
        height={450}
        priority
        alt="img"
      />
    );

    return (
      <Flex justify="space-evenly">
        {/* Left Content */}
        <Flex vertical>
          <b style={{ color: "purple" }}>EXPLORE MORE</b>
          <b style={{ fontSize: "5vh" }}>Recommended Destinations</b>
        </Flex>
        {/* Right Content */}
        <div style={{ width: "50%" }}>
          <Carousel autoplay>
            <RenderImages img="aboutus-img-5.jpg" />
            <RenderImages img="aboutus-img-6.jpg" />
            <RenderImages img="aboutus-img-7.jpg" />
            <RenderImages img="aboutus-img-8.jpg" />
            <RenderImages img="aboutus-img-9.jpg" />
          </Carousel>
        </div>
      </Flex>
    );
  };

  const ContentSection_6 = () => (
    <Flex vertical style={{ backgroundColor: "azure" }}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h3 style={{ color: "purple" }}>PROMOTION</h3>
        <h1>See What Our Clients Say About Us</h1>
      </div>
      <Card
        hoverable
        style={{ width: "40%", marginLeft: "30%", marginRight: "30%" }}
      >
        <Flex align="center" gap="middle">
          <Image
            src={require(`../../../public/client-avatar-1.png`)}
            style={{
              width: "20%",
              height: "20%",
              objectFit: "cover",
              borderRadius: "5%",
            }}
            priority
            alt="img"
          />
          <h2>Christine Beckam - Designer</h2>
        </Flex>
        <Divider />
        <Text>
          I've been on several European tours, but this one exceeded all
          expectations. The itinerary covered iconic landmarks and hidden gems
          alike. The accommodations were top-notch,and the local cuisine
          recommendations were spot-on. Highly recommended!"
        </Text>
      </Card>
      <br />
      <br />
    </Flex>
  );

  return (
    <Flex vertical gap={80}>
      <ContentSection_1 />
      <ContentSection_2 />
      <ContentSection_3 />
      <ContentSection_4 />
      <ContentSection_5 />
      <ContentSection_6 />
      <Divider />
    </Flex>
  );
}
