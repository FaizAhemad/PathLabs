import {Button, Carousel, Col, Flex, Image, Row, Splitter, Tag} from "antd";
import React from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import icons from "../../icons";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const {t} = useTranslation("homepage");

  const testAndCheckupImages = [
    "womenCare.png",
    "bone.png",
    "diabetes.png",
    "feverAndInfections.png",
    "fullbody.png",
    "hairAndSkins.png",
    "heart.png",
    "lifestyle.png",
    "thyroid.png",
    "vitamins.png",
  ];

  const offerCarouselImages = [
    {
      fileName: "lib1.jpeg",
      url: "/offers/1",
    },
    {fileName: "lib2.jpeg", url: "/offers/2"},
    {fileName: "lib3.jpeg", url: "/offers/3"},
    {fileName: "lib4.jpeg", url: "/offers/4"},
    {fileName: "lib5.jpeg", url: "/offers/5"},
    {fileName: "lib6.jpeg", url: "/offers/6"},
  ];

  return (
    <div style={{margin: "40px 0"}}>
      <div className="carousel-container">
        <Carousel
          draggable={false}
          slidesToShow={2.5}
          autoplay
          arrows
          centerMode={false}
          autoplaySpeed={3000}
          infinite
          dots={false}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {offerCarouselImages.map((obj) => {
            return (
              <React.Fragment key={obj.fileName}>
                <Image
                  style={{
                    borderRadius: "15px",
                    cursor: obj.url ? "pointer" : "default",
                  }}
                  width={"95%"}
                  height={"278px"}
                  preview={false}
                  src={`images/${obj.fileName}`}
                  onClick={() => {
                    navigate(obj.url);
                  }}
                />
              </React.Fragment>
            );
          })}
        </Carousel>
      </div>

      <div style={{marginTop: "40px"}}>
        <h2>{t("lab_tests_by_health_concern")}</h2>
        <h3>
          {t("powered_by")}
          <Image width={40} height={30} src="images/logoWhite.png"></Image>
        </h3>
        <div style={{marginTop: "20px"}} className="carousel-container">
          <Carousel
            draggable={false}
            slidesToShow={6.5}
            autoplay={false}
            centerMode={false}
            centerPadding="10px"
            autoplaySpeed={3000}
            infinite
            dots={false}
            arrows
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {testAndCheckupImages.map((fileName) => {
              return (
                <div key={fileName}>
                  <Image
                    width={"160px"}
                    // height={"178px"}
                    preview={false}
                    src={`images/tests-and-checkups/${fileName}`}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div style={{marginTop: "40px"}}>
        <Flex vertical gap="middle">
          <Splitter
            style={{height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}
          >
            <Splitter.Panel
              size={"50%"}
              style={{background: "#eef4ff"}}
              resizable={false}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 50px",
                  gap: 20,
                }}
              >
                <div>
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 76 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38 71.997c20.987 0 38-1.06 38-2.366 0-1.307-17.013-2.366-38-2.366S0 68.324 0 69.63c0 1.306 17.013 2.366 38 2.366z"
                      fill="#CED8E7"
                    />
                    <path
                      d="M39.811 0h18.88c.987 0 1.938.399 2.637 1.107a3.804 3.804 0 0 1 1.093 2.669V7.4c0 .2-.04.395-.113.58a1.53 1.53 0 0 1-.325.49 1.46 1.46 0 0 1-1.06.436H39.81V0z"
                      fill="#6D94CF"
                    />
                    <path
                      d="M52.08.007H12.643a5.187 5.187 0 0 0-3.695 1.554 5.327 5.327 0 0 0-1.53 3.743v55.28h42.698c.567 0 1.123-.118 1.646-.34a4.254 4.254 0 0 0 1.394-.952c.398-.406.713-.89.929-1.417a4.423 4.423 0 0 0 .322-1.669V4.772c0-.63.197-4.196 3.716-4.768h-6.04l-.003.003z"
                      fill="#AAC8F5"
                    />
                    <path
                      d="M6.281 60.584h43.71c-1.653 0-2.992-1.75-2.992-4.411V53.78a.828.828 0 0 0-.238-.583.808.808 0 0 0-.574-.244H4.214a.935.935 0 0 0-.662.28.957.957 0 0 0-.274.673v3.628c0 .399.077.797.227 1.166a3.013 3.013 0 0 0 2.78 1.883H6.28z"
                      fill="#7EA6E0"
                    />
                    <path
                      d="M17.83 20.983c3.815 0 6.91-3.134 6.91-6.994 0-3.861-3.095-6.995-6.91-6.995-3.816 0-6.91 3.134-6.91 6.995 0 3.86 3.094 6.994 6.91 6.994z"
                      fill="#6D94CE"
                    />
                    <path
                      d="M38.373 26.07H11.728a.812.812 0 0 0-.809.815v.273c0 .45.363.816.809.816h26.645a.812.812 0 0 0 .809-.816v-.273a.812.812 0 0 0-.809-.815zM50.17 31.794H11.86c-.52 0-.94.424-.94.952v.008c0 .524.42.952.94.952h38.31c.52 0 .94-.425.94-.953v-.007a.947.947 0 0 0-.94-.952zM50.17 37.512H11.86c-.52 0-.94.424-.94.952v.007c0 .525.42.953.94.953h38.31c.52 0 .94-.425.94-.953v-.007a.947.947 0 0 0-.94-.952zM50.17 43.236H11.86c-.52 0-.94.424-.94.952v.008c0 .524.42.952.94.952h38.31c.52 0 .94-.425.94-.953v-.007a.947.947 0 0 0-.94-.952z"
                      fill="#D6E6FF"
                    />
                    <path
                      d="M13.594 16.495v-5.548h2.143c.366-.01.728.067 1.061.229.286.14.52.37.67.653.16.292.241.624.237.956a1.85 1.85 0 0 1-.237.953 1.57 1.57 0 0 1-.684.583 2.486 2.486 0 0 1-1.072.21h-1.453v-.941h1.263c.197.007.391-.026.577-.092a.724.724 0 0 0 .33-.273.91.91 0 0 0 .102-.462 1.017 1.017 0 0 0-.102-.465.73.73 0 0 0-.33-.284 1.407 1.407 0 0 0-.577-.1h-.783v4.588h-1.142l-.003-.007zm2.963-2.521 1.36 2.52h-1.28l-1.331-2.52h1.25zM19.472 12.357l.754 1.458.771-1.458h1.153l-1.19 2.082 1.223 2.078H21.03l-.812-1.436-.79 1.414h-1.152l1.214-2.078-1.152-2.082 1.13.022h.004z"
                      fill="#fff"
                    />
                    <path
                      d="m64.981 56.745-.007 3.344c0 .136.055.258.143.35a.493.493 0 0 0 .838-.35l.008-3.344h-.982zM65.545 14.443c.812 0 1.467.664 1.467 1.484l-.01 6.533h-2.935l.011-6.537c0-.82.659-1.48 1.47-1.48h-.003z"
                      fill="#7EA6E0"
                    />
                    <path
                      d="m66.515 20.695-1.954-1.321h-1.467a.49.49 0 0 0-.49.49l-.033 19.253 4.562 2.31-.615-20.735-.003.003z"
                      fill="#7EA6E0"
                    />
                    <path
                      d="m64.558 19.377-.037 22.05 3.918-2.296.033-18.757-1.467-.99h-2.447v-.007z"
                      fill="#AAC8F5"
                    />
                    <path
                      d="M67.005 19.381h2.447c.27.004.49.225.49.498l-.022 12.8c0 .805-.622 1.488-1.416 1.514a1.472 1.472 0 0 1-1.518-1.484l.022-13.328h-.003z"
                      fill="#7EA6E0"
                    />
                    <path
                      d="m66.478 40.442-1.954-1.321h-1.957l-.022 12.571 3.907 3.425.026-14.679v.004z"
                      fill="#6689B2"
                    />
                    <path
                      d="m64.524 39.12-.029 15.994 3.922-3.414.022-12.576-3.915-.007v.004z"
                      fill="#7EA6E0"
                    />
                    <path
                      d="M63.917 58.214a.49.49 0 0 0 .48.392h1.071l.988-5.592-1.954-1.322h-1.957l1.372 6.519v.003z"
                      fill="#7EA6E0"
                    />
                    <path
                      d="M66.54 58.61a.49.49 0 0 0 .48-.388l1.397-6.519-3.915-.007.966 6.913h1.072z"
                      fill="#AAC8F5"
                    />
                  </svg>
                </div>

                <Flex
                  //   align="center"
                  justify="center"
                  style={{flexDirection: "column", height: "100%", gap: 10}}
                >
                  <h2 style={{color: "#33393f"}}>
                    {t("order_with_prescription")}
                  </h2>
                  <p style={{color: "#666e75"}}>
                    {t(
                      "upload_prescription_and_we_will_deliver_your_medicines"
                    )}
                  </p>

                  <Button
                    style={{
                      background: "#10847e",
                      width: "max-content",
                      color: "white",
                      fontWeight: "700",
                      padding: "20px",
                    }}
                  >
                    {icons["attachment"]} {t("upload")}
                  </Button>
                </Flex>
              </div>
            </Splitter.Panel>
            <Splitter.Panel size={"50%"} style={{padding: 25}}>
              <h4>{t("how_does_this_work")}</h4>

              <Row>
                <Col
                  span={12}
                  style={{
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Tag
                    style={{
                      padding: "10px 15px",
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                    }}
                    color="processing"
                  >
                    1
                  </Tag>
                  {t("upload_a_photo_of_your_prescription")}
                </Col>
                <Col
                  span={12}
                  style={{
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Tag
                    style={{
                      padding: "10px 15px",
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                    }}
                    color="processing"
                  >
                    3
                  </Tag>
                  {t("we_will_call_you_to_confirm_the_medicines")}
                </Col>
              </Row>
              <Row>
                <Col
                  span={12}
                  style={{
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Tag
                    style={{
                      padding: "10px 15px",
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                    }}
                    color="processing"
                  >
                    2
                  </Tag>
                  {t("add_delivery_address_and_place_the_order")}
                </Col>
                <Col
                  span={12}
                  style={{
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Tag
                    style={{
                      padding: "10px 15px",
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                    }}
                    color="processing"
                  >
                    4
                  </Tag>
                  {t(
                    "now_sit_back_your_medicines_will_get_delivered_at_your_doorstep"
                  )}
                </Col>
              </Row>
            </Splitter.Panel>
          </Splitter>
        </Flex>
      </div>
    </div>
  );
};
export default Home;
