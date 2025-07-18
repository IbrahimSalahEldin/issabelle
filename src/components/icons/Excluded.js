import * as React from "react";
const SvgExcluded = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 13"
    {...props}
  >
    <g clipPath="url(#excluded_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.71 6.488C3.72 5.154-.056 2.323 0 1.156.196.87 1.286.016 1.866.016c.65 0 4.34 3.747 4.815 4.082C7.18 3.65 9.194.772 9.45.002c.882-.037 1.61.583 2.107 1.008C13.296 2.5 9.39 5.383 8.895 6.508c1.844 2.102 4.789 4.212 1.869 6.103-.407.263-.576.414-1.21.386-.235-.546-2.324-3.8-2.874-4.148l-4.333 3.927c-.588.57-1.455-.124-1.912-.452C-1.12 11.206 3.64 7.9 4.71 6.488"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="excluded_svg__a">
        <path fill="#fff" d="M0 13h12V0H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExcluded;
