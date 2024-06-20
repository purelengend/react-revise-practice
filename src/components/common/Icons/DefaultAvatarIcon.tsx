import { createIcon } from "@chakra-ui/react";

export const DefaultAvatarIcon = createIcon({
  displayName: "DefaultAvatarIcon",
  viewBox: "0 0 82 86",
  path: (
    <>
      <ellipse
        cx="41"
        cy="66.5"
        rx="41"
        ry="19"
        fill="url(#paint0_linear_39_209)"
      />
      <g filter="url(#filter0_d_39_209)">
        <circle cx="41" cy="20.5" r="20" fill="url(#paint1_linear_39_209)" />
      </g>
      <defs>
        <filter
          id="filter0_d_39_209"
          x="17"
          y="0.5"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_39_209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_39_209"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_39_209"
          x1="41"
          y1="57"
          x2="41"
          y2="85.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#818181" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_39_209"
          x1="41"
          y1="10.5"
          x2="41"
          y2="40.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#818181" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </>
  ),
  defaultProps: {
    w: "82px",
    h: "86px",
    color: "currentColor",
  },
});
