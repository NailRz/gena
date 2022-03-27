import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { View , StyleSheet } from 'react-native';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const WhiteWaveBg = (props) => (
  
  <Svg
  width={390}
  height={628}
  viewBox="0 0 390 628"
  preserveAspectRatio="xMidYMid meet"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props} 
>
  <Path
    d="M299.962 42.3083C369.107 65.4341 390 109.659 390 109.659V629H0V0C112.921 78.8944 230.816 19.1826 299.962 42.3083Z"
    fill="white"
  />
  
</Svg>
);
// const styles = StyleSheet.create(
//   {
//       container:{
//         elevation: 3, 
//         zIndex:3,
//         position: 'relative'
//       },
//   }
// );
export default WhiteWaveBg;
