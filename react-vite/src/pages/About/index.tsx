import { FC, ReactNode } from "react";
import { useLocation, useParams } from "react-router-dom";

type AboutProps = {
  children?: ReactNode;
};

const About: FC<AboutProps> = () => {
  const location = useLocation();
  const params = useParams();//14

  console.log(location, "location");
  console.log(params, "params");

  return <div>About</div>;
};

export default About;
