import {Carousel} from "antd";
import {CarouselRef} from "antd/es/carousel";
import {useRef} from "react";
import VerifyOTP from "./VerifyOTP";
import Login from "./login/Login";
import Signup from "./signup/Signup";

export default function LoginAndSignup() {
  const carouselRef = useRef<CarouselRef>(null);
  const goToSlide = (index: number) => {
    console.log(index, carouselRef);
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        draggable={false}
        slidesToShow={1}
        autoplay={false}
        arrows={false}
        infinite={false}
        dots={false}
        centerMode
        centerPadding="0px"
        ref={carouselRef}
        style={{width: "500px"}}
      >
        <div style={{width: "100px"}}>
          <Login goToSlide={goToSlide} />
        </div>
        <div>
          <Signup goToSlide={goToSlide} />
        </div>
        <div>
          <VerifyOTP />
        </div>
      </Carousel>
    </div>
  );
}
