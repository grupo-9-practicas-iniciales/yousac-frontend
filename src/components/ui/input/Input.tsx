type Props = {
  label?: string;
  placeholder: string;
  classStyles?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export const Input = ({
  label,
  placeholder,
  classStyles,
  onChange,
  value,
  name,
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className="text-xs md:text-sm mb-1 text-primary-light-2 dark:text-white"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        value={value}
        name={name}
        className={
          classStyles +
          " " +
          " px-4 py-2 text-xs md:text-sm border placeholder:text-gray-300/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light-1 focus:border-transparent dark:bg-dark dark:text-white"
        }
        placeholder={placeholder}
      />
    </div>
  );
};
