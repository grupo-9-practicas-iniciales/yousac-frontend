import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const BubblesLight = (props: Props) => (
  <>
    {/* Tiny */}
    <svg
      className="absolute dark:hidden -top-10 md:top-24 right-8 md:right-16 w-[90px] md:w-[120px] rotate-[140deg]"
      width={159}
      height={159}
      viewBox="0 0 159 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.5}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.7124 39.4835C61.053 18.1429 96.6207 17.4247 119.242 40.0461C141.623 62.427 140.022 97.5658 118.908 118.679C97.7294 139.858 62.4963 141.692 40.0462 119.242C17.3562 96.5521 18.3072 60.8887 39.7124 39.4835Z"
          fill="url(#paint0_linear_23_80)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.7124 39.4835C61.053 18.1429 96.6207 17.4247 119.242 40.0461C141.623 62.427 140.022 97.5658 118.908 118.679C97.7294 139.858 62.4963 141.692 40.0462 119.242C17.3562 96.5521 18.3072 60.8887 39.7124 39.4835Z"
          fill="url(#paint1_radial_23_80)"
          fillOpacity={0.7}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_23_80"
          x1={39.598}
          y1={39.5979}
          x2={121.962}
          y2={121.962}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002466" />
          <stop offset={1} stopColor="#62C6F2" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_23_80"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(41.3799 59.1989) rotate(37.2282) scale(52.8477)"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
    <svg
      className="absolute dark:hidden -top-36 md:top-0 -left-16 md:left-0 w-[210px] md:w-[250px] rotate-[140deg]"
      width={374}
      height={374}
      viewBox="0 0 374 374"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.5}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M271.546 288.417C216.844 334.318 132.861 328.676 84.2054 270.691C36.0676 213.322 47.0874 130.828 101.208 85.4156C155.495 39.8627 238.92 42.806 287.207 100.352C336.01 158.513 326.414 242.378 271.546 288.417Z"
          fill="url(#paint0_linear_23_79)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M271.546 288.417C216.844 334.318 132.861 328.676 84.2054 270.691C36.0676 213.322 47.0874 130.828 101.208 85.4156C155.495 39.8627 238.92 42.806 287.207 100.352C336.01 158.513 326.414 242.378 271.546 288.417Z"
          fill="url(#paint1_radial_23_79)"
          fillOpacity={0.7}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_23_79"
          x1={271.84}
          y1={288.171}
          x2={94.6874}
          y2={77.0493}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002466" />
          <stop offset={1} stopColor="#62C6F2" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_23_79"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(271.682 241.603) rotate(-137.772) scale(125.042)"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  </>
);

export { BubblesLight };
