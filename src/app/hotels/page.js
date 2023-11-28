"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  Typography,
  Flex,
  Divider,
  Input,
  DatePicker,
  Select,
} from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { RangePicker } = DatePicker;

import hotelsData from "@/data/hotelsData";

// Hotels Page
export default function Hotels() {
  const ContentSection_1 = () => (
    <>
      <Card
        style={{
          position: "absolute",
          marginTop: "40vh",
          marginLeft: "5vh",
          width: "40%",
          background: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <b style={{ fontSize: "5vh" }}>
          Make your travel wishlist, we'll do the rest
        </b>
        <p style={{ fontSize: "3vh", fontWeight: "bold" }}>
          Special offers to suit your plan
        </p>
      </Card>
      <Image
        src={require("../../../public/hotels-bg-1.jpg")}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        priority
        alt="bg-1"
      />
    </>
  );

  const ContentSection_2 = () => {
    // Init Filter
    const [country, setCountry] = useState("");
    const [hotelsList, setHotelsList] = useState(hotelsData);

    // Default Room & Guest
    const defaultRoomGuest = [
      { value: "1R1G", label: "1 Room, 1 Guests" },
      { value: "1R2G", label: "1 Room, 2 Guests" },
      { value: "1R4G", label: "1 Room, 4 Guests" },
      { value: "2R6G", label: "2 Room, 6 Guests" },
      { value: "3R8G", label: "2 Room, 8 Guests" },
    ];

    // Filter Result
    const FilterResult = () => {
      let newList = hotelsData.filter((item) =>
        item.country.toLowerCase().includes(country.toLowerCase())
      );
      setHotelsList(newList);
    };

    return (
      <Card hoverable style={{ marginLeft: "10%", marginRight: "10%" }}>
        {/* Filter Result */}
        <h2>Where are you flying?</h2>
        <Flex gap="large">
          <Input
            allowClear
            size="large"
            placeholder="Enter Country"
            style={{ width: "40%" }}
            prefix={<GlobalOutlined />}
            value={country}
            onChange={(el) => setCountry(el.target.value)}
          />
          <RangePicker size="large" style={{ width: "30%" }} />
          <Select
            size="large"
            style={{ width: "30%" }}
            options={defaultRoomGuest}
            defaultValue="1R1G"
          />
        </Flex>
        <br />
        <Flex justify="end">
          <Button type="primary" size="large" onClick={() => FilterResult()}>
            Show Places
          </Button>
        </Flex>
        <Divider />
        {/* Search Result */}
        <h2>Your recent searches</h2>
        <Flex wrap="wrap" gap="large">
          {/* Show empty message */}
          {hotelsList.length == 0 && (
            <h2 style={{ textAlign: "center" }}>No Hotels Found</h2>
          )}
          {/* Render Result */}
          {hotelsList.map((item) => (
            <Card
              hoverable
              key={item.id}
              style={{ width: "23%" }}
              onClick={() => (window.location.href = `/hotels/${item.id}`)}
            >
              <Flex gap="large">
                <Image
                  src={require(`../../../public/${item.imgURL}`)}
                  style={{
                    maxWidth: "13vh",
                    maxHeight: "13vh",
                    borderRadius: "1vh",
                  }}
                  priority
                  alt="img"
                />
                <Flex vertical>
                  <h4>{item.country}</h4>
                  <Text type="secondary">{item.places.length} Places</Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Card>
    );
  };

  const ContentSection_3 = () => {
    // Render Detail
    const RenderDetail = ({ item, price }) => (
      <Flex vertical style={{ position: "relative", width: "20%" }}>
        <Image
          src={require(`../../../public/${item.imgURL}`)}
          style={{
            width: "100%",
            height: "60vh",
            borderRadius: "1vh",
            objectFit: "cover",
          }}
          priority
          alt="img"
        />
        <Flex
          vertical
          gap="small"
          style={{
            position: "absolute",
            bottom: 0,
            width: "90%",
            margin: "5%",
          }}
        >
          <b style={{ color: "white", fontSize: "3vh" }}>{item.country}</b>
          <span style={{ color: "white", fontSize: "3vh" }}>RM {price}</span>
          <Button
            type="primary"
            onClick={() => (window.location.href = `/hotels/${item.id}`)}
          >
            Book Now
          </Button>
        </Flex>
      </Flex>
    );

    return (
      <Flex vertical style={{ padding: "10vh" }}>
        <Flex align="center" justify="space-between">
          <Flex vertical style={{ maxWidth: "80%" }}>
            <b style={{ fontSize: "5vh" }}>Fall into travel</b>
            <span style={{ fontSize: "3vh" }}>
              Going somewhere to celebrate this season? Whether you're going
              home or somewhere to roam, we've got the travel tools to get you
              to your destination.
            </span>
          </Flex>
          <Button
            size="large"
            onClick={() => (window.location.href = `/packages`)}
          >
            See All
          </Button>
        </Flex>
        <Divider />
        <Flex wrap="wrap" gap="large">
          <RenderDetail item={hotelsData[0]} price={4000} />
          <RenderDetail item={hotelsData[1]} price={3500} />
          <RenderDetail item={hotelsData[8]} price={2800} />
          <RenderDetail item={hotelsData[9]} price={2000} />
        </Flex>
      </Flex>
    );
  };

  const ContentSection_4 = () => (
    <Flex vertical style={{ padding: "10vh" }}>
      <Flex align="center" justify="space-between">
        <Flex vertical style={{ maxWidth: "80%" }}>
          <b style={{ fontSize: "5vh" }}>Fall into travel</b>
          <span style={{ fontSize: "3vh" }}>
            Going somewhere to celebrate this season? Whether you're going home
            or somewhere to roam, we've got the travel tools to get you to your
            destination.
          </span>
        </Flex>
        <Button
          size="large"
          onClick={() => (window.location.href = `/packages`)}
        >
          See All
        </Button>
      </Flex>
      <Divider />
      <Flex gap="large">
        {/* Left Content */}
        <Card style={{ width: "50%" }}>
          <Flex vertical justify="space-between">
            <Flex align="center" justify="space-between">
              <h1>Backpacking SriLanka</h1>
              <Button size="large" type="primary">
                From RM 1,700
              </Button>
            </Flex>
            <p style={{ fontSize: "2vh" }}>
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>
            <Divider />
            <Button
              type="primary"
              size="large"
              onClick={() => (window.location.href = `/packages`)}
            >
              Book Now
            </Button>
          </Flex>
        </Card>
        {/* Right Content */}
        <Flex vertical gap="large">
          <Flex gap="large">
            <Image
              src={require(`../../../public/package-img-4.jpg`)}
              style={{
                width: "48%",
                height: "30vh",
                borderRadius: "1vh",
                objectFit: "cover",
              }}
              priority
              alt="img"
            />
            <Image
              src={require(`../../../public/package-img-5.jpg`)}
              style={{
                width: "48%",
                height: "30vh",
                borderRadius: "1vh",
                objectFit: "cover",
              }}
              priority
              alt="img"
            />
          </Flex>
          <Flex gap="large">
            <Image
              src={require(`../../../public/package-img-6.jpg`)}
              style={{
                width: "48%",
                height: "30vh",
                borderRadius: "1vh",
                objectFit: "cover",
              }}
              priority
              alt="img"
            />
            <Image
              src={require(`../../../public/package-img-7.jpg`)}
              style={{
                width: "48%",
                height: "30vh",
                borderRadius: "1vh",
                objectFit: "cover",
              }}
              priority
              alt="img"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );

  return (
    <Flex vertical gap={60}>
      <ContentSection_1 />
      <ContentSection_2 />
      <ContentSection_3 />
      <ContentSection_4 />
      <Divider />
    </Flex>
  );
}
