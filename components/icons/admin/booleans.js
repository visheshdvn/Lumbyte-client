const tick = (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full stroke-green-600"
  >
    <path
      d="M15.0633 8.86077C14.5008 11.6733 12.3802 14.3215 9.40455 14.9133C7.95329 15.2023 6.44784 15.0261 5.10256 14.4097C3.75727 13.7934 2.64074 12.7683 1.91193 11.4804C1.18313 10.1926 0.87921 8.70764 1.04345 7.23703C1.20769 5.76641 1.83172 4.3851 2.82668 3.28977C4.86743 1.04202 8.3133 0.423269 11.1258 1.54827"
      strokeWidth="1.6875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.50085 7.73577L8.31335 10.5483L15.0634 3.23577"
      strokeWidth="1.6875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cross = (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full stroke-red-600"
  >
    <path
      d="M10.5312 5.46875L5.46875 10.5312M5.46875 5.46875L10.5312 10.5312"
      strokeWidth="1.6875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 15.0312C11.8833 15.0312 15.0312 11.8833 15.0312 8C15.0312 4.11675 11.8833 0.96875 8 0.96875C4.11675 0.96875 0.96875 4.11675 0.96875 8C0.96875 11.8833 4.11675 15.0312 8 15.0312Z"
      strokeWidth="1.6875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

module.exports = { tick, cross };
