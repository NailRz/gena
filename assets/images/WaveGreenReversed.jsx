import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WaveGreenReversed = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg"  
    width={390}
    height={70}
    viewBox="0 0 1440 320" 
    preserveAspectRatio="none"{...props}>
    <Path
        fill="#4ECCA3"
        
        fillOpacity={1}
      d="M0,288L60,240C120,192,240,96,360,58.7C480,21,600,43,720,69.3C840,96,960,128,1080,117.3C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </Svg>
);

export default WaveGreenReversed;
