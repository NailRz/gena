import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const FacebookIcon = (props) => (
  <Svg
    width={55}
    height={55}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={27.6651}
      cy={27.3349}
      r={25.8349}
      stroke="#4ECCA3"
      strokeWidth={3}
    />
    <Path
      d="M23.4954 22.2386H19.789V27.3349H23.4954V42.6239H29.6728V27.3349H34.1724L34.6147 22.2386H29.6728V20.1147C29.6728 18.8979 29.91 18.4163 31.0503 18.4163H34.6147V12.0459H29.91C25.4672 12.0459 23.4954 14.0628 23.4954 17.9258V22.2386Z"
      fill="#4ECCA3"
    />
  </Svg>
);

export default FacebookIcon;
