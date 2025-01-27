import {Button, Card, Flex, Input, Typography} from "antd";
import {NavLink} from "react-router";
import icons from "../../../icons";

export default function Signup() {
  return (
    <Card title="" style={{height: "300px"}}>
      <Flex
        // align="center"
        // justify="center"
        gap={20}
        style={{flexDirection: "column"}}
      >
        <div>
          <Typography>Enter Name</Typography>
          <Input variant="outlined" placeholder="Basic usage" />
        </div>
        <div>
          <Typography>Enter Mobile Number</Typography>
          <Input variant="outlined" placeholder="Basic usage" />
        </div>

        <Button
          type="primary"
          color="primary"
          style={{
            alignSelf: "start",
            background: "lightGreen",
            color: "black",
            fontWeight: 500,
          }}
        >
          Signup {icons["arrowRight"]}
        </Button>
        <Typography>
          Already have an account? Click{" "}
          <NavLink to={"/login-signup"} state={{tabName: "login"}}>
            here
          </NavLink>{" "}
          to login.
        </Typography>
      </Flex>
    </Card>
  );
}
