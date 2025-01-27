import {Flex, Image} from "antd";

export const PageNotFound = () => {
  return (
    <>
      <Flex align="center" justify="center" style={{height: "100%"}}>
        <Image src="/images/pageNotFound.gif" width={"50%"} preview={false} />
      </Flex>
    </>
  );
};
