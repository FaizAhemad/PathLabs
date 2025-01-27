import {useParams} from "react-router";

const Test = () => {
  const {name} = useParams();
  return <div>{name} Test</div>;
};

export default Test;
