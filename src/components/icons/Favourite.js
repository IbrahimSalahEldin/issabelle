import * as React from "react";
const SvgFavourite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 45 45"
    {...props}
  >
    <circle cx={22.056} cy={22.166} r={23.366} fill="currentBackground" />
    <path
      fill="currentColor"
      d="M17.463 12.71c-3.844 0-6.96 2.414-6.96 6.804s6.496 8.617 12.064 13.153c5.568-4.536 12.093-8.708 12.093-13.153 0-4.444-3.116-6.803-6.96-6.803-2.027 0-3.86 1.37-5.132 2.721-1.271-1.342-3.086-2.721-5.104-2.721z"
    />
  </svg>
);
export default SvgFavourite;
