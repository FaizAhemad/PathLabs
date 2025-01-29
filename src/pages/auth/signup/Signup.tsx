import {Button, Card, Flex, Input, Typography} from "antd";

export default function Signup({
  goToSlide,
}: {
  goToSlide: (slide: number) => void;
}) {
  return (
    <Card title="" style={{height: "400px"}}>
      <Flex gap={10} style={{flexDirection: "column"}}>
        <h2>Quick Register</h2>

        <Typography>Enter name</Typography>
        <Input variant="outlined" placeholder="Basic usage" />
        <Typography style={{color: "red"}}>Name is not valid</Typography>

        <Typography>Enter mobile number</Typography>
        <Input variant="outlined" placeholder="Basic usage" />
        <Typography style={{color: "red"}}>
          Mobile number is not valid
        </Typography>

        <Button
          type="primary"
          color="green"
          variant="solid"
          style={{
            alignSelf: "start",
          }}
          onClick={() => goToSlide(2)}
        >
          Signup
        </Button>
        <Typography>
          Already have an account? click
          <Button
            type="link"
            style={{padding: "0 5px"}}
            onClick={() => goToSlide(0)}
          >
            here
          </Button>
          to login.
        </Typography>
      </Flex>
    </Card>
  );
}
