
export const Waves1SVG = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 25.514l25.117 3.189c23.185 4.784 71.487 12.756 121.721 25.513 48.302 12.757 96.604 30.297 144.905 30.297 50.234 0 98.536-17.54 146.838-38.27C486.883 25.513 537.117 0 585.419 0c48.302 0 96.604 25.514 146.838 28.703 48.301 4.784 96.603-12.757 144.905-12.757 50.234 0 98.536 17.54 121.721 25.513L1024 51.027V177H0V25.513z"
                fill="url(#prefix__paint0_linear_24_139)"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear_24_139"
                    x1={-177.498}
                    y1={0}
                    x2={1092.48}
                    y2={475.364}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5433FF" />
                    <stop offset={1} stopColor="#00E6F6" />
                </linearGradient>
            </defs>
        </svg>
    );
}