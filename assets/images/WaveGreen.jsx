import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WaveGreen = (props) => (
  <Svg 
    xmlns="http://www.w3.org/2000/svg"
    width={390}
    height={70} 
    viewBox="0 0 1440 320" 
    fill="none"
    preserveAspectRatio="none"
   {...props}>
    <Path
          fill="#4ecca3"
          //fillOpacity={1}
          d="M0,32L80,74.7C160,117,320,203,480,213.3C640,224,800,160,960,160C1120,160,1280,224,1360,256L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"    />
  </Svg>
);

export default WaveGreen;
