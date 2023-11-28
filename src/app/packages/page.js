"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Card, Typography, Flex, Divider, Slider, Input } from "antd";
import { StarFilled, SearchOutlined, PushpinOutlined } from "@ant-design/icons";

import packagesData from "@/data/packagesData";

const { Text } = Typography;

// Packages Page
export default function Packages() {
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
        <b style={{ color: "white", fontSize: "10vh" }}>Travel with Us</b>
      </div>
      <Image
        src={require("../../../public/package-bg-1.jpg")}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        priority
        alt="bg-1"
      />
    </>
  );

  const ContentSection_2 = () => {
    // Init Filter
    const [tour, setTour] = useState("");
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState([1000, 10000]);
    const [packagesList, setPackageList] = useState(packagesData);

    // Display Packages Card
    const RenderPackageCard = ({ item }) => (
      <Card
        hoverable
        style={{ width: "45%" }}
        onClick={() => (window.location.href = `/packages/${item.id}`)}
      >
        <Flex vertical gap="small">
          <Image
            src={require(`../../../public/${item.imgURL}`)}
            style={{
              width: "100%",
              height: "20vh",
              objectFit: "cover",
              borderRadius: "2vh",
            }}
            priority
            alt="img"
          />
          <b>{item.name}</b>
          <span>{item.country}</span>
          <span>{item.intro}</span>
          <Flex gap="small">
            <b>RM {item.price}</b>
            <StarFilled style={{ color: "orange" }} />
            <span>{item.rate}</span>
          </Flex>
        </Flex>
      </Card>
    );

    // Filter Result
    const FilterResult = () => {
      let newList = packagesData.filter(
        (item) =>
          item.price >= price[0] &&
          item.price <= price[1] &&
          item.name.toLowerCase().includes(tour.toLowerCase()) &&
          item.country.toLowerCase().includes(place.toLowerCase())
      );
      setPackageList(newList);
    };

    return (
      <Card style={{ marginLeft: "15%", marginRight: "15%" }}>
        <Flex justify="space-around">
          <Flex style={{ maxWidth: "60%" }} wrap="wrap" gap="middle">
            {/* Show empty message */}
            {packagesList.length == 0 && (
              <h2 style={{ textAlign: "center" }}>No Package Found</h2>
            )}
            {/* Render Card */}
            {packagesList.map((item) => (
              <RenderPackageCard key={item.id} item={item} />
            ))}
          </Flex>
          {/* Filter */}
          <Flex vertical style={{ maxWidth: "40%" }} gap="middle">
            <b style={{ fontSize: "4vh" }}>Plan Your Trip</b>
            <Text>
              Every detail is crafted with care, ensuring a travel experience
              that exceeds your expectations. Plan your trip now and let the
              adventure begin!
            </Text>
            <Divider />
            <Input
              allowClear
              prefix={<SearchOutlined />}
              placeholder="Search Package"
              size="large"
              value={tour}
              onChange={(el) => setTour(el.target.value)}
            />
            <Input
              allowClear
              prefix={<PushpinOutlined />}
              placeholder="Search Country"
              size="large"
              value={place}
              onChange={(el) => setPlace(el.target.value)}
            />
            <b>Filter by Price</b>
            <Slider
              range
              min={1000}
              max={10000}
              step={500}
              value={price}
              onChange={(val) => setPrice(val)}
            />
            <Button type="primary" size="large" onClick={() => FilterResult()}>
              Find Package
            </Button>
          </Flex>
        </Flex>
      </Card>
    );
  };

  const ContentSection_3 = () => (
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
      <Divider />
    </Flex>
  );
}
