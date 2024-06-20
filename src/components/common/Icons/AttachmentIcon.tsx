import { createIcon } from "@chakra-ui/react";

export const AttachmentIcon = createIcon({
  displayName: "AttachmentIcon",
  viewBox: "0 0 16 17",
  path: (
    <>
      <g clipPath="url(#clip0_7_224)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.16108 7.0624C0.174497 6.07581 0.174495 4.47623 1.16108 3.48965L2.98978 1.66095C3.97637 0.674363 5.57594 0.674366 6.56253 1.66095L15.4769 10.5753C15.6348 10.7332 15.7235 10.9474 15.7235 11.1708V15.3813C15.7235 15.8464 15.3465 16.2234 14.8814 16.2234H10.6709C10.4475 16.2234 10.2334 16.1347 10.0754 15.9767L1.16108 7.0624ZM2.352 4.68056C2.02314 5.00942 2.02314 5.54262 2.352 5.87148L3.09194 6.61142L6.11155 3.59181L5.37161 2.85187C5.04275 2.52301 4.50956 2.52301 4.18069 2.85187L2.352 4.68056ZM7.30247 4.78273L4.28286 7.80234L11.0197 14.5392H14.0393V11.5196L7.30247 4.78273Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_224">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(0 1 -1 0 16 0.5)"
          />
        </clipPath>
      </defs>
    </>
  ),
  defaultProps: {
    w: "16px",
    h: "17px",
    color: "currentColor",
  },
});
