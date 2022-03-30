import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Pen = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.769 9.923L7.127 22.562L0 24L1.438 16.872L14.079 4.232L19.769 9.923ZM21.183 8.509L24 5.689L18.309 0L15.493 2.817L21.183 8.509Z"
      fill="#D1D1D1"
    />
  </Svg>
);

export default Pen;
