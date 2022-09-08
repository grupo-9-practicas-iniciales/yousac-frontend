import { SVGProps } from "react";

export const Waves1SVG = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={374}
            height={111}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16l9.198 2c8.49 3 26.18 8 44.576 16 17.688 8 35.377 19 53.066 19 18.396 0 36.085-11 53.773-24 17.689-13 36.085-29 53.774-29 17.688 0 35.377 16 53.773 18 17.689 3 35.378-8 53.066-8 18.397 0 36.085 11 44.576 16L375 32v79H0V16z"
                fill="url(#prefix__paint0_linear_6_564)"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear_6_564"
                    x1={-65.002}
                    y1={0}
                    x2={441.062}
                    y2={110.616}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5433FF" />
                    <stop offset={1} stopColor="#00E6F6" />
                </linearGradient>
            </defs>
        </svg>
    );
}