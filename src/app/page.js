"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Breadcrumb,
  Card,
  Typography,
  Flex,
  Modal,
  Input,
  Divider,
  DatePicker,
  Select,
  Space,
  Checkbox,
  Progress,
  Image as ImageViews,
} from "antd";
import {
  RadiusSettingOutlined,
  CheckSquareOutlined,
  CarOutlined,
  PhoneOutlined,
  SendOutlined,
  PushpinOutlined,
  UsergroupAddOutlined,
  HeartOutlined,
  CalendarOutlined,
  UserAddOutlined,
  StarFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

// Dummy Activities
const ActivitiesOptions = [
  "Culture",
  "Romantic",
  "Shopping",
  "Traditions",
  "Guide",
  "Outdoors",
  "Religious",
  "Business",
  "Walks",
  "Healthcare",
  "Relaxing",
  "Hiking",
  "Museums",
  "Fishing",
  "Wildlife",
  "Musical",
  "Party",
  "Cruise",
  "Accomodation",
];

// Home Page
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control show Customize Package

  // Display Customize Package
  const RenderModal = () => (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => (window.location.href = "/packages")}
      okText="Build Package"
    >
      <Title level={3}>Build Your Own Package</Title>
      <Divider />
      <Typography.Title level={5}>
        Enter destination (country, region or city)
      </Typography.Title>
      <Input allowClear size="large" />
      <Space>
        <div>
          <Typography.Title level={5}>Date Range</Typography.Title>
          <RangePicker size="large" />
        </div>
        <div>
          <Typography.Title level={5}>Guests (Adults)</Typography.Title>
          <Select
            defaultValue="1"
            style={{ width: "100%" }}
            size="large"
            options={(() => {
              let result = [];
              for (let i = 1; i <= 10; i++) {
                result.push({ value: i, label: i });
              }
              return result;
            })()}
          />
        </div>
      </Space>
      <Typography.Title level={5}>
        Activities preferences (optional)
      </Typography.Title>
      <Checkbox.Group options={ActivitiesOptions} />
      <Divider />
    </Modal>
  );

  // Render Images
  const RenderImage = ({ logoName, w, h }) => (
    <Image
      src={require(`../../public/${logoName}`)}
      width={w}
      height={h}
      alt={logoName}
    />
  );

  const ContentSection_1 = () => (
    <>
      <div
        style={{
          position: "absolute",
          marginTop: "30vh",
          marginLeft: "20vh",
          maxWidth: "60vh",
        }}
      >
        <Title style={{ color: "white" }}>
          No matter where you're going to, we'll take you there
        </Title>
        <Card>
          <Flex justify="center" align="center" gap="large">
            <Breadcrumb
              items={[
                { title: "Where to ?" },
                { title: "Travel type ?" },
                { title: "Duration ?" },
                { title: "" },
              ]}
            />
            <Button
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Submit
            </Button>
            <RenderModal />
          </Flex>
        </Card>
      </div>
      <Image
        src={require("../../public/home-bg-1.jpg")}
        style={{ maxWidth: "100%", maxHeight: "100vh", objectFit: "cover" }}
        priority
        alt="bg-1"
      />
    </>
  );

  const ContentSection_2 = () => (
    // Display Customers Logo
    <Flex justify="space-around" wrap="wrap">
      <RenderImage logoName="fly-emirates-logo.png" w={200} h={70} />
      <RenderImage logoName="trivago-logo.png" w={200} h={70} />
      <RenderImage logoName="airbnb-logo.png" w={200} h={70} />
      <RenderImage logoName="turkish-airlines-logo.png" w={200} h={70} />
      <RenderImage logoName="swiss-logo.png" w={200} h={70} />
    </Flex>
  );

  const ContentSection_3 = () => (
    // Display Provided Services
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "purple" }}>CATEGORY</h2>
      <h1>We Offers Best Services</h1>
      <Flex justify="space-evenly" wrap="wrap">
        <Card hoverable style={{ maxWidth: "35vh" }}>
          <RenderImage logoName="home-icon-1.png" w={100} h={100} />
          <h2>Guided Tours</h2>
          <Text>
            Guided tour guides to ensure you enjoy the most enjoyable view
          </Text>
        </Card>
        <Card hoverable style={{ maxWidth: "35vh" }}>
          <RenderImage logoName="home-icon-2.png" w={100} h={100} />
          <h2>Best Flights Options</h2>
          <Text>The customers savings and safety are our primary concern</Text>
        </Card>
        <Card hoverable style={{ maxWidth: "35vh" }}>
          <RenderImage logoName="home-icon-3.png" w={100} h={100} />
          <h2>Religious Tours</h2>
          <Text>Show you the religion and have a better understanding</Text>
        </Card>
        <Card hoverable style={{ maxWidth: "35vh" }}>
          <RenderImage logoName="home-icon-4.png" w={100} h={100} />
          <h2>Medical insurance</h2>
          <Text>Provided medical insurance in case anything goes south</Text>
        </Card>
      </Flex>
    </div>
  );

  const ContentSection_4 = () => (
    // Display Honeymoon Special Content
    <Flex gap={40} style={{ marginTop: "5vh" }} wrap="wrap">
      <Flex vertical gap="large">
        <Image
          src={require(`../../public/home-img-2.jpg`)}
          width={100}
          height={100}
          alt={"img"}
          style={{
            borderRadius: 100,
            position: "absolute",
            marginTop: "-5vh",
            marginLeft: "23%",
          }}
        />
        <Image
          src={require(`../../public/home-img-3.jpg`)}
          width={150}
          height={150}
          alt={"img"}
          style={{
            borderRadius: 100,
            position: "absolute",
            marginTop: "10vh",
            marginLeft: "13%",
          }}
        />
        <Image
          src={require(`../../public/home-img-4.jpg`)}
          width={130}
          height={130}
          alt={"img"}
          style={{
            borderRadius: 100,
            position: "absolute",
            marginTop: "35vh",
            marginLeft: "10%",
          }}
        />
      </Flex>
      <Image
        src={require(`../../public/home-img-1.jpeg`)}
        alt={"img"}
        style={{
          width: "50vh",
          height: "80vh",
          borderStartStartRadius: 200,
          borderStartEndRadius: 200,
          marginLeft: "15%",
        }}
      />
      <Flex
        vertical
        style={{ marginLeft: "5%", marginRight: "5%", maxWidth: "40%" }}
      >
        <h2 style={{ color: "purple" }}>HONEYMOON SPECIALS</h2>
        <span style={{ fontSize: 60, fontWeight: "bold" }}>
          Our Romantic Tropical Destinations
        </span>
        <p style={{ fontSize: 20 }}>
          lmmerse yourselves in the breathtaking beauty of sunsets with our
          handpicked destinations known for their panoramic views. From
          beachfront escapes to mountain hideaways, these retreats offer the
          perfect backdrop for a romantic evening
        </p>
        <span>
          <Button
            type="primary"
            size="large"
            onClick={() => (window.location.href = "/packages")}
          >
            View Packages
          </Button>
        </span>
      </Flex>
    </Flex>
  );

  const ContentSection_5 = () => (
    <Flex style={{ padding: "5%" }} justify="space-around">
      {/* Left Content */}
      <Flex vertical style={{ width: "40%" }} gap="small">
        <h2 style={{ color: "orange" }}>Fast & Easy</h2>
        <span style={{ fontSize: 50, fontWeight: "bold" }}>
          Get Your Favourite Resort Bookings
        </span>
        <Flex gap="large" align="flex-end">
          <RadiusSettingOutlined
            style={{
              fontSize: "5vh",
              backgroundColor: "orange",
              color: "white",
              padding: "2%",
              borderRadius: "20%",
            }}
          />
          <Flex vertical style={{ color: "gray" }}>
            <h2>Choose Destination</h2>
            <span>Choose tour destinations that suit your travel purposes</span>
          </Flex>
        </Flex>
        <Flex gap="large" align="flex-end">
          <CheckSquareOutlined
            style={{
              fontSize: "5vh",
              backgroundColor: "red",
              color: "white",
              padding: "2%",
              borderRadius: "20%",
            }}
          />
          <Flex vertical style={{ color: "gray" }}>
            <h2>Check Availability</h2>
            <span>Check availability on best comforting hotels around you</span>
          </Flex>
        </Flex>
        <Flex gap="large" align="flex-end">
          <CarOutlined
            style={{
              fontSize: "5vh",
              backgroundColor: "darkblue",
              color: "white",
              padding: "2%",
              borderRadius: "20%",
            }}
          />
          <Flex vertical style={{ color: "gray" }}>
            <h2>Let's Go</h2>
            <span>
              Contact through our website and wewill plan everything for you in
              advance
            </span>
          </Flex>
        </Flex>
      </Flex>
      {/* Right Content */}
      <Card hoverable style={{ width: "25%" }}>
        <Flex vertical gap="middle">
          <Image
            src={require(`../../public/home-img-5.jpg`)}
            alt={"img"}
            style={{ height: "20vh", width: "100%", borderRadius: 20 }}
          />
          <span style={{ fontSize: 20, fontWeight: "bold" }}>
            Trip to Hawaii
          </span>
          <span style={{ color: "gray" }}>14-29 June | by JR Martir</span>
          <Flex gap="middle">
            <PhoneOutlined
              style={{
                fontSize: "2vh",
                backgroundColor: "lightgrey",
                color: "gray",
                borderRadius: "100%",
                padding: "3%",
              }}
            />
            <SendOutlined
              style={{
                fontSize: "2vh",
                backgroundColor: "lightgrey",
                color: "gray",
                borderRadius: "100%",
                padding: "3%",
              }}
            />
            <PushpinOutlined
              style={{
                fontSize: "2vh",
                backgroundColor: "lightgrey",
                color: "gray",
                borderRadius: "100%",
                padding: "3%",
              }}
            />
          </Flex>
          <Flex justify="space-between">
            <div>
              <UsergroupAddOutlined
                style={{
                  fontSize: "2vh",
                  color: "gray",
                }}
              />
              <span>&emsp;60 people are interested</span>
            </div>
            <HeartOutlined
              style={{
                fontSize: "2vh",
                color: "red",
                marginRight: "5%",
              }}
            />
          </Flex>
          <Divider style={{ marginTop: 0, marginBottom: 0 }} />
          <Flex gap="large">
            <Image
              src={require(`../../public/home-img-6.jpg`)}
              alt={"img"}
              style={{ height: "10%", width: "20%", borderRadius: "100%" }}
            />
            <Flex vertical style={{ width: "100%" }} gap="small">
              <b style={{ color: "gray" }}>Onging</b>
              <b>Trip to rome</b>
              <b>
                <span style={{ color: "red" }}>40%</span> completed
              </b>
              <Progress percent={40} status="active" />
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );

  const ContentSection_6 = () => (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: "5%",
          marginLeft: "10%",
          maxWidth: "40%",
        }}
      >
        <h1 style={{ color: "white", fontSize: "5vh" }}>
          Let's Make Your Next Holiday Amazing
        </h1>
      </div>
      <Image
        src={require("../../public/home-img-7.jpg")}
        style={{ maxWidth: "100%", maxHeight: "40vh", objectFit: "cover" }}
        priority
        alt="img-7"
      />
    </div>
  );

  const ContentSection_7 = () => (
    <Flex justify="space-around">
      {/* Left Content */}
      <Flex vertical style={{ width: "40%" }}>
        <h2 style={{ color: "purple" }}>PROMOTION</h2>
        <span style={{ fontSize: "5vh", fontWeight: "bold" }}>
          We Provide You Best Europe Sightseeing Tours
        </span>
        <br />
        <Text>
          Immerse yourself in the local culture with our knowledgeable
          guidesTheir passion for their homeland ensures that you not only see
          the sights but also understand the stories behind them, creating a
          richer travel experience.
        </Text>
        <br />
        <br />
        <Flex gap={30}>
          <ImageViews
            src="home-img-8.jpg"
            style={{
              minWidth: "25vh",
              minHeight: "25vh",
              borderRadius: "10%",
            }}
          />
          <ImageViews
            src="home-img-9.jpg"
            style={{
              minWidth: "25vh",
              minHeight: "25vh",
              borderRadius: "10%",
            }}
          />
          <ImageViews
            src="home-img-10.jpg"
            style={{
              minWidth: "25vh",
              minHeight: "25vh",
              borderRadius: "10%",
            }}
          />
          <ImageViews
            src="home-img-11.jpeg"
            style={{
              minWidth: "25vh",
              minHeight: "25vh",
              borderRadius: "10%",
            }}
          />
        </Flex>
      </Flex>
      {/* Right Content */}
      <Image
        src={require("../../public/home-img-12.jpg")}
        style={{
          width: "25%",
          height: "70vh",
          borderRadius: "5%",
        }}
        priority
        alt="img-12"
      />
    </Flex>
  );

  const ContentSection_8 = () => (
    <Flex>
      <div style={{ width: "100%", opacity: 0.5 }}>
        <Image
          src={require("../../public/home-img-13.jpg")}
          style={{
            width: "50%",
            height: "40vh",
            objectFit: "cover",
          }}
          priority
          alt="img"
        />
        <Image
          src={require("../../public/home-img-14.jpg")}
          style={{
            width: "50%",
            height: "40vh",
            objectFit: "cover",
          }}
          priority
          alt="img"
        />
      </div>
      <Flex
        style={{
          position: "absolute",
          marginTop: "3%",
          textAlign: "center",
          width: "100%",
        }}
        justify="space-around"
      >
        <Flex vertical>
          <h3>PROMOTION</h3>
          <h1 style={{ fontSize: "5vh" }}>Explore Nature</h1>
          <Button
            type="primary"
            size="large"
            onClick={() => (window.location.href = "/packages")}
          >
            View Package
          </Button>
        </Flex>
        <Flex vertical>
          <h3>PROMOTION</h3>
          <h1 style={{ fontSize: "5vh" }}>Explore Cites</h1>
          <Button
            type="primary"
            size="large"
            onClick={() => (window.location.href = "/packages")}
          >
            View Package
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );

  const ContentSection_9 = () => {
    // Render Package Card Detail
    const RenderPackageCard = ({
      bg,
      flag,
      days,
      people,
      name,
      country,
      price,
      oriprice,
      desc,
    }) => (
      <Card hoverable style={{ width: "30%" }}>
        <Flex vertical gap="small">
          <Image
            src={require(`../../public/${bg}`)}
            style={{
              width: "100%",
              height: "40vh",
              objectFit: "cover",
              borderRadius: "5%",
            }}
            priority
            alt="img"
          />
          <Flex justify="space-between" align="center">
            <Image
              src={require(`../../public/${flag}`)}
              style={{
                width: "15%",
                height: "15%",
              }}
              priority
              alt="img"
            />
            <Flex gap="small">
              <CalendarOutlined style={{ fontSize: "3vh" }} />
              <h2>{days} Days</h2>
              &emsp;
              <UserAddOutlined style={{ fontSize: "3vh" }} />
              <h2>{people} People Going</h2>
            </Flex>
          </Flex>
          <Flex justify="space-between" align="center">
            <b style={{ fontSize: "4vh" }}>{name}</b>
            <div>
              <StarFilled style={{ fontSize: "3vh", color: "orange" }} />
              <StarFilled style={{ fontSize: "3vh", color: "orange" }} />
              <StarFilled style={{ fontSize: "3vh", color: "orange" }} />
              <StarFilled style={{ fontSize: "3vh", color: "orange" }} />
              <StarFilled style={{ fontSize: "3vh", color: "orange" }} />
            </div>
          </Flex>
          <Flex gap="small" style={{ color: "gray" }}>
            <PushpinOutlined style={{ fontSize: "3vh" }} />
            <span style={{ fontSize: "3vh" }}>{country}</span>
          </Flex>
          <Flex align="center" gap="small">
            <b style={{ fontSize: "3vh", color: "purple" }}>{price}</b>
            <Text delete>{oriprice}</Text>
          </Flex>
          <Text>{desc}</Text>
          <Button
            type="primary"
            onClick={() => (window.location.href = "/packages")}
          >
            Explore Now
          </Button>
        </Flex>
      </Card>
    );
    return (
      <Flex vertical>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h3 style={{ color: "purple" }}>TRENDY</h3>
          <h1 style={{ fontSize: "5vh" }}>Our Trending Tour Packages</h1>
        </div>
        {/* Packages Card */}
        <Flex justify="space-around">
          {/* Switzerland Package */}
          <RenderPackageCard
            bg="home-img-15.jpg"
            flag="switzerland-flag.png"
            days={8}
            people={25}
            name="Switzerland"
            country="Europe"
            price="RM 4,000"
            oriprice="RM 6,000"
            desc="Experience the idyllic charm of Swiss villages that seem like they've been plucked from a fairy tale. Visit places like Zermatt, Grindelwald, and Interlaken, where traditional Alpine architecture meets the tranquility of thecountryside."
          />
          {/* Maldives Package */}
          <RenderPackageCard
            bg="home-img-16.jpg"
            flag="maldives-flag.png"
            days={8}
            people={30}
            name="Male"
            country="Maldives"
            price="RM 5,500"
            oriprice="RM 8,000"
            desc="Escape to your private slice of paradise on secluded islands. Our tours take you to hidden gems, where you can unwind in tranquility, surrounded by lush greenery and pristine beaches."
          />
          {/* Egypt Package */}
          <RenderPackageCard
            bg="home-img-17.jpeg"
            flag="egypt-flag.png"
            days={8}
            people={155}
            name="Giza"
            country="Egypt"
            price="RM 8,800"
            oriprice="RM 12,000"
            desc="Explore the Pyramid of Khafre, the second-largest pyramid at Giza, and admire its distinctive casing stones that still partially adorn the pinnacle. Ascend the pyramid plateau to enjoy panoramic views of the Giza complex and the Cairo skyline."
          />
        </Flex>
      </Flex>
    );
  };

  const ContentSection_10 = () => (
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
            src={require(`../../public/client-avatar-1.png`)}
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
      <ContentSection_7 />
      <ContentSection_8 />
      <ContentSection_9 />
      <ContentSection_10 />
      <Divider />
    </Flex>
  );
}
