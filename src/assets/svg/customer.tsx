import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill={props.dark ? "#D9D9D9" : "#000000"} d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill={props.dark ? "#D9D9D9" : "#000000"}
        d="M11.819 5.721v-1.25h6.25v1.25h-6.25Zm0 3.238v-1.25h6.25v1.25h-6.25Zm0 3.237v-1.25h6.25v1.25h-6.25Zm-5.206-.69c-.605 0-1.12-.211-1.545-.635a2.097 2.097 0 0 1-.637-1.542c0-.605.212-1.12.635-1.544a2.097 2.097 0 0 1 1.543-.637c.605 0 1.12.211 1.544.635.425.423.637.937.637 1.542s-.212 1.12-.635 1.545a2.097 2.097 0 0 1-1.542.637Zm-4.682 4.68v-1.263a1.41 1.41 0 0 1 .648-1.185A7.814 7.814 0 0 1 6.61 12.66a7.819 7.819 0 0 1 4.032 1.077 1.41 1.41 0 0 1 .647 1.186v1.262H1.931Zm1.327-1.378v.128h6.705v-.128a6.938 6.938 0 0 0-1.626-.67 6.617 6.617 0 0 0-3.453 0 6.938 6.938 0 0 0-1.626.67Zm3.353-4.551c.257 0 .476-.09.657-.272a.896.896 0 0 0 .272-.658.895.895 0 0 0-.272-.658.895.895 0 0 0-.657-.271.896.896 0 0 0-.658.271.895.895 0 0 0-.272.658c0 .258.09.477.272.658.18.181.4.272.658.272Z"
      />
    </g>
  </svg>
);
export default SvgComponent;
