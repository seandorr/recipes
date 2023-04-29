import React from "react";

interface propTypes {
  color?: string;
  size: number | string;
}

export const Expand = ({ color, size }: propTypes) => {
  return (
    <svg
      width={size}
      height={parseInt(size.toString()) + 1}
      viewBox="0 0 36 37"
    >
      <g
        transform="translate(0.000000, 0.800000)"
        fill={color || "inherit"}
        fillRule="nonzero"
      >
        <polygon points="0 36 0 21 3 21 3 30.9 30.9 3 21 3 21 0 36 0 36 15 33 15 33 5.1 5.1 33 15 33 15 36"></polygon>
      </g>
    </svg>
  );
};
