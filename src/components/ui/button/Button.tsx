type Props = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

const primaryStyles =
  "dark:bg-[#478E9B] hover:dark:hover:bg-primary-dark-3/[.70]";
const secondaryStyles =
  "dark:bg-primary-light-gradient dark:hover:opacity-[.87]";

export const Button = ({
  text,
  onClick,
  variant = "primary",
  className,
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
      {text}
    </button>
  );
};
