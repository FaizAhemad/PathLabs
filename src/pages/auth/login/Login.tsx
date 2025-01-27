import {Button, Card, Flex, Input, Typography} from "antd";
import icons from "../../../icons";

export default function Login() {
  return (
    <Card title="" style={{height: "300px"}}>
      <Flex gap={20} style={{flexDirection: "column"}}>
        <div>
          <Typography>Enter Mobile Number</Typography>
          <Input variant="outlined" placeholder="Basic usage" />
        </div>

        <Button loading type="primary" style={{alignSelf: "start"}}>
          {" "}
          Send OTP {icons["arrowRight"]}
        </Button>
      </Flex>
    </Card>
  );
}
