"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  Typography,
  Flex,
  Divider,
  message,
  DatePicker,
  Select,
} from "antd";
import { StarFilled, UsergroupAddOutlined } from "@ant-design/icons";

import { useParams } from "next/navigation";

import hotelsData from "@/data/hotelsData";

const { Text } = Typography;
const { RangePicker } = DatePicker;

// Packages Detail Page
export default function PackagesDetail() {
  // Init Popup alert
  const [messageApi, contextHolder] = message.useMessage();
  // Get HotelID from path
  const hotelID = useParams().id;
  // Check HotelID exist
  const hotelExist =
    !isNaN(hotelID) && hotelsData.some((item) => item.id == parseInt(hotelID));

  // Get Hotel Detail
  const hotelDetail = hotelsData.filter(
    (item) => item.id == parseInt(hotelID)
  )[0];

  const ContentSection_1 = () => {
    // Selected Place
    const [selectedPlace, setSelectedPlace] = useState(0);

    // Default Room & Guest
    const defaultRoomGuest = [
      { value: "1R1G", label: "1 Room, 1 Guests" },
      { value: "1R2G", label: "1 Room, 2 Guests" },
      { value: "1R4G", label: "1 Room, 4 Guests" },
      { value: "2R6G", label: "2 Room, 6 Guests" },
      { value: "3R8G", label: "2 Room, 8 Guests" },
    ];

    return (
      <>
        <div
          style={{
            position: "absolute",
            marginTop: !hotelExist ? "50vh" : "20vh",
            width: "60%",
            textAlign: !hotelExist && "center",
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          <Card>
            {!hotelExist ? (
              // Display Error Message
              <Flex vertical gap="large">
                <b style={{ fontSize: "5vh" }}>No Hotel Found</b>
                <Button
                  size="large"
                  type="primary"
                  onClick={() => (window.location.href = "/hotels")}
                >
                  Go to Hotels
                </Button>
              </Flex>
            ) : (
              // Display Hotel Detail
              <Flex gap="large">
                <Image
                  src={require(`../../../../public/${hotelDetail.imgURL}`)}
                  style={{
                    width: "50%",
                    height: "65vh",
                    objectFit: "cover",
                    borderRadius: "2vh",
                  }}
                  priority
                  alt="img"
                />
                <Flex vertical justify="space-between">
                  <Flex vertical gap="middle">
                    <h2>{hotelDetail.country}</h2>
                    <Flex vertical>
                      <b>Place</b>
                      <Select
                        size="large"
                        options={hotelDetail.places.map((item, index) => ({
                          value: index,
                          label: item.name,
                        }))}
                        defaultValue={0}
                        onChange={(val) => setSelectedPlace(val)}
                      />
                      <p>{hotelDetail.places[selectedPlace].description}</p>
                    </Flex>
                    <RangePicker size="large" />
                    <Select
                      size="large"
                      options={defaultRoomGuest}
                      defaultValue="1R1G"
                    />
                    <Divider />
                    <Text>{hotelDetail.intro}</Text>
                    <Text>{hotelDetail.desc}</Text>
                  </Flex>
                  <Flex gap="small" justify="end">
                    <Button
                      type="default"
                      size="large"
                      onClick={() => window.history.back()}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      size="large"
                      onClick={() =>
                        messageApi.open({
                          type: "success",
                          content: "Booking Success!",
                        })
                      }
                    >
                      Book Now
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Card>
        </div>
        <Image
          src={require("../../../../public/hotels-bg-1.jpg")}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          priority
          alt="bg-1"
        />
      </>
    );
  };

  return (
    <Flex vertical gap={80}>
      {contextHolder}
      <ContentSection_1 />
      <Divider />
    </Flex>
  );
}
