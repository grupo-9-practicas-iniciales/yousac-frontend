type Props = {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "fourth";
  onClick?: () => void;
  disabled?: boolean;
};

const primaryStyles =
  "dark:bg-[#478E9B] hover:dark:hover:bg-primary-dark-3/[.70]";
const secondaryStyles =
  "dark:bg-primary-light-gradient dark:hover:opacity-[.87]";

const tertiaryStyles = "bg-error-gradient hover:opacity-[.87]";

const fourthStyles = "bg-success-gradient hover:opacity-[.87]";

export const Button = ({
  className,
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={
        className +
        " " +
        ({
          primary: primaryStyles,
          secondary: secondaryStyles,
          tertiary: tertiaryStyles,
          fourth: fourthStyles,
        }[variant] || "") +
        " w-full rounded-md text-white py-2 px-4 bg-primary-light-1 hover:bg-primary-light-2 transition-all duration-200 text-xs md:text-sm"
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
