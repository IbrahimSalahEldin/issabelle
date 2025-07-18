import * as React from "react";
const SvgIncluded = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <g clipPath="url(#included_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.993 9.832C4.523 9.586 3.06 6.908 2.394 6.3c-.64-.063-1.996.41-2.394.727.004.655 2.92 4.906 3.454 5.722.543.83 1.266 2.138 2.41 2.25.646.063 1.462-2.142 1.917-3.081.9-1.859 7.2-10.732 7.22-10.832C14.745.663 13.99.35 13.453.08 11.335-.989 6.281 9.087 4.993 9.832"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="included_svg__a">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIncluded;
