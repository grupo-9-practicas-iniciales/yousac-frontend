import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const BubbleDarkTiny = (props: Props) => (
  <svg
    className="absolute hidden dark:block -top-12 md:top-0 right-14 md:right-1/5 w-[60px] md:w-[90px] rotate-[140deg]"
    width={265}
    height={265}
    viewBox="0 0 265 265"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={132.5} cy={92.5} r={132.5} fill="url(#paint0_linear_23_75)" />
    <circle
      cx={132.5}
      cy={92.5}
      r={132.5}
      fill="url(#paint1_radial_23_75)"
      fillOpacity={0.7}
    />
    <defs>
      <linearGradient
        id="paint0_linear_23_75"
        x1={132.5}
        y1={-40}
        x2={132.5}
        y2={225}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1488CC" />
        <stop offset={1} stopColor="#2B32B2" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_23_75"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(111.962 16.3125) rotate(76.7391) scale(106.862)"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

export { BubbleDarkTiny };
