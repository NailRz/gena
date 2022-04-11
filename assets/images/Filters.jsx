import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Filters = (props) => (
  <Svg
  width={50}
  height={50}
  viewBox="0 0 50 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Rect width={50} height={50} rx={15} fill="white" />
  <Path
    d="M19.75 27.9166C17.9066 27.9166 16.3631 29.1533 15.8568 30.8333H13.3333V33.1666H15.8568C16.3631 34.8466 17.9066 36.0833 19.75 36.0833C21.5933 36.0833 23.1368 34.8466 23.6431 33.1666H36.6666V30.8333H23.6431C23.1368 29.1533 21.5933 27.9166 19.75 27.9166ZM19.75 33.75C18.7851 33.75 18 32.9648 18 32C18 31.0351 18.7851 30.25 19.75 30.25C20.7148 30.25 21.5 31.0351 21.5 32C21.5 32.9648 20.7148 33.75 19.75 33.75ZM30.25 20.9166C28.4066 20.9166 26.8631 22.1533 26.3568 23.8333H13.3333V26.1666H26.3568C26.8631 27.8466 28.4066 29.0833 30.25 29.0833C32.0933 29.0833 33.6368 27.8466 34.1431 26.1666H36.6666V23.8333H34.1431C33.6368 22.1533 32.0933 20.9166 30.25 20.9166ZM30.25 26.75C29.2851 26.75 28.5 25.9648 28.5 25C28.5 24.0351 29.2851 23.25 30.25 23.25C31.2148 23.25 32 24.0351 32 25C32 25.9648 31.2148 26.75 30.25 26.75Z"
    fill="#4ECCA3"
  />
  <Path
    d="M25.9765 16.8333C25.4701 15.1533 23.9266 13.9166 22.0833 13.9166C20.24 13.9166 18.6965 15.1533 18.1901 16.8333H13.3333V19.1666H18.1901C18.6965 20.8466 20.24 22.0833 22.0833 22.0833C23.9266 22.0833 25.4701 20.8466 25.9765 19.1666H36.8125V16.8333H25.9765ZM22.0833 19.75C21.1185 19.75 20.3333 18.9648 20.3333 18C20.3333 17.0351 21.1185 16.25 22.0833 16.25C23.0481 16.25 23.8333 17.0351 23.8333 18C23.8333 18.9648 23.0481 19.75 22.0833 19.75Z"
    fill="#4ECCA3"
  />
</Svg>
);

export default Filters;