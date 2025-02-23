import {Card, Flex, Form, Input, Typography} from "antd";
import {useForm} from "react-hook-form";
import icons from "../../../icons";
import Button from "../../../ui/button";
type FormValues = {
  mobileNumber: string;
};
export default function Login({
  goToSlide,
}: {
  goToSlide: (slide: number) => void;
}) {
  const {register, handleSubmit} = useForm<FormValues>();

  const onSendOTP = () => {
    console.log("clicked");
    goToSlide(2);
  };

  return (
    <Form onSubmitCapture={handleSubmit(onSendOTP)}>
      <Card title="" style={{height: "300px"}}>
        <Flex gap={10} style={{flexDirection: "column"}}>
          <h2>Quick Login</h2>

          <Typography>Enter mobile number</Typography>
          <Input
            variant="outlined"
            placeholder="Enter mobile number"
            {...register("mobileNumber")}
          />

          <Typography style={{color: "red"}}>
            Mobile number is not valid
          </Typography>

          <Button type="primary" htmlType="submit" style={{alignSelf: "start"}}>
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
    </Form>
  );
}
