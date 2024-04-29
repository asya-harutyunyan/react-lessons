import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type LandingProps = {
  children?: ReactNode;
};

const Landing: FC<LandingProps> = () => {
  return (
    <div>
      Landing
      <p>
        Click this link to go to About page
        <Link to="/about/14">Go to about</Link>
      </p>
      <p>
        Click this link to go to Contact page
        <Link to="/contact">Go to contact</Link>
      </p>
    </div>
  );
};

export default Landing;
