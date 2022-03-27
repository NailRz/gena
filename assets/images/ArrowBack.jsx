import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBack = (props) => (
  <Svg
    width={18}
    height={28}
    viewBox="0 0 17.5 28"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.5 3.5L13.9335 0L5.96046e-07 14L13.9335 28L17.5 24.5L7 14L17.5 3.5Z"
      fill="white"
    />
  </Svg>
);

export default ArrowBack;
