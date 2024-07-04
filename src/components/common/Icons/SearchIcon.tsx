import { createIcon } from "@chakra-ui/react";

export const SearchIcon = createIcon({
  displayName: "SearchIcon",
  viewBox: "0 0 14 14",
  path: (
    <>
      <g id="search 1" clipPath="url(#clip0_63_207)">
        <path
          id="Vector"
          d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1688 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687ZM5.6875 10.5C3.02695 10.5 0.875 8.34805 0.875 5.6875C0.875 3.02695 3.02695 0.875 5.6875 0.875C8.34805 0.875 10.5 3.02695 10.5 5.6875C10.5 8.34805 8.34805 10.5 5.6875 10.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_63_207">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </>
  ),
  defaultProps: {
    boxSize: "14px",
    color: "gray.100",
  },
});
