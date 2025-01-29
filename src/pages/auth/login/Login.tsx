import {Button, Card, Flex, Input, Typography} from "antd";
import icons from "../../../icons";

export default function Login({
  goToSlide,
}: {
  goToSlide: (slide: number) => void;
}) {
  return (
    <Card title="" style={{height: "300px"}}>
      <Flex gap={10} style={{flexDirection: "column"}}>
        <h2>Quick Login</h2>

        <Typography>Enter mobile number</Typography>
        <Input variant="outlined" placeholder="Enter mobile number" />

        <Typography style={{color: "red"}}>
          Mobile number is not valid
        </Typography>

        <Button
          type="primary"
          style={{alignSelf: "start"}}
          onClick={() => goToSlide(2)}
        >
          Send OTP {icons["arrowRight"]}
        </Button>

        <Typography>
          Don't have an account? click
          <Button
            type="link"
            style={{padding: "0 5px"}}
            onClick={() => goToSlide(1)}
          >
            here
          </Button>
          to signup.
        </Typography>
      </Flex>
    </Card>
  );
}
