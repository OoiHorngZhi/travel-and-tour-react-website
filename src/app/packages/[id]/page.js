"use client";
import React from "react";
import Image from "next/image";
import { Button, Card, Typography, Flex, Divider, message } from "antd";
import { StarFilled, UsergroupAddOutlined } from "@ant-design/icons";

import { useParams } from "next/navigation";

import packagesData from "@/data/packagesData";

const { Text } = Typography;

// Packages Detail Page
export default function PackagesDetail() {
  // Init Popup alert
  const [messageApi, contextHolder] = message.useMessage();
  // Get PackageID from path
  const packageID = useParams().id;
  // Check PackageID exist
  const packageExist =
    !isNaN(packageID) &&
    packagesData.some((item) => item.id == parseInt(packageID));

  // Get Package Detail
  const packageDetail = packagesData.filter(
    (item) => item.id == parseInt(packageID)
  )[0];

  const ContentSection_1 = () => (
    <>
      <div
        style={{
          position: "absolute",
          marginTop: !packageExist ? "50vh" : "20vh",
          width: "60%",
          textAlign: !packageExist && "center",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        <Card>
          {!packageExist ? (
            // Display Error Message
            <Flex vertical gap="large">
              <b style={{ fontSize: "5vh" }}>No Packages Found</b>
              <Button
                size="large"
                type="primary"
                onClick={() => (window.location.href = "/packages")}
              >
                Go to Packages
              </Button>
            </Flex>
          ) : (
            // Display Pacakge Detail
            <Flex gap="large">
              <Image
                src={require(`../../../../public/${packageDetail.imgURL}`)}
                style={{
                  width: "50%",
                  height: "60vh",
                  objectFit: "cover",
                  borderRadius: "2vh",
                }}
                priority
                alt="img"
              />
              <Flex vertical justify="space-between">
                <Flex vertical gap="small">
                  <Flex align="center" gap="middle">
                    <h2>{packageDetail.name}</h2>
                    <span>{packageDetail.country}</span>
                  </Flex>
                  <Flex gap="middle">
                    <b>RM {packageDetail.price}</b>
                    <div>
                      <StarFilled style={{ color: "orange" }} />
                      <span> {packageDetail.rate}</span>
                    </div>
                    <div>
                      <UsergroupAddOutlined style={{ color: "purple" }} />
                      <span> {packageDetail.people}+ People</span>
                    </div>
                  </Flex>
                  <Divider />
                  <Text>{packageDetail.intro}</Text>
                  <Text>{packageDetail.desc}</Text>
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
        src={require("../../../../public/package-bg-1.jpg")}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        priority
        alt="bg-1"
      />
    </>
  );

  return (
    <Flex vertical gap={80}>
      {contextHolder}
      <ContentSection_1 />
      <Divider />
    </Flex>
  );
}
