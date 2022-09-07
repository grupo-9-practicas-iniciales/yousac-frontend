type Props = {
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export const Input = ({
  placeholder,
  className,
  onChange,
  value,
  name,
}: Props) => {
  return (
    <input
      onChange={onChange}
      value={value}
      name={name}
      className={
        className +
        " " +
        "rounded bg-white border border-primary-light-3 dark:placeholder:text-gray-200 focus:outline-none h-9 text-xs px-4 md:text-sm dark:bg-dark"
      }
      placeholder={placeholder}
    />
  );
};
