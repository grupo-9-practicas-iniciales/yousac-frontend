type Props = {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

const primaryStyles =
  "dark:bg-[#478E9B] hover:dark:hover:bg-primary-dark-3/[.70]";
const secondaryStyles =
  "dark:bg-primary-light-gradient dark:hover:opacity-[.87]";

export const Button = ({
  onClick,
  variant = "primary",
  className,
  children,
}: Props) => {
  return (
    <button
      className={
        className +
        " " +
        (variant === "primary" ? primaryStyles : secondaryStyles) +
        " rounded-sm text-white py-2 px-4 bg-primary-light-1 hover:bg-primary-light-2 transition-all duration-200 text-xs md:text-sm"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
