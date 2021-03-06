import * as React from "react";
import Svg, { Path, Line } from "react-native-svg";

const Or = (props) => (
  <Svg
    width={332}
    height={21}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 332 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M146.674 7.46H148.402V14.408L154.252 7.46H155.818V17H154.09V10.052L148.258 17H146.674V7.46ZM167.362 7.46V17H165.634V8.972H161.53L161.422 11.096C161.362 12.38 161.248 13.454 161.08 14.318C160.912 15.17 160.636 15.854 160.252 16.37C159.868 16.886 159.334 17.144 158.65 17.144C158.338 17.144 157.984 17.09 157.588 16.982L157.696 15.524C157.852 15.56 157.996 15.578 158.128 15.578C158.608 15.578 158.968 15.368 159.208 14.948C159.448 14.528 159.604 14.03 159.676 13.454C159.748 12.878 159.814 12.056 159.874 10.988L160.036 7.46H167.362ZM170.703 7.46H172.431V14.408L178.281 7.46H179.847V17H178.119V10.052L172.287 17H170.703V7.46Z"
      fill="#BCBCBC"
    />
    <Line y1={10} x2={123} y2={10} stroke="#BCBCBC" strokeWidth={2} />
    <Line x1={204} y1={10} x2={332} y2={10} stroke="#BCBCBC" strokeWidth={2} />
  </Svg>
);

export default Or;
