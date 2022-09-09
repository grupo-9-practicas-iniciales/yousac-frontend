import { Field } from "formik";

type Props = {
  autoComplete?: string;
  classStyles?: string;
  label?: string;
  placeholder: string;
  name: string;
  type?: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField = ({
  autoComplete,
  label,
  placeholder,
  classStyles,
  name,
  type,
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
      <Field
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={
          classStyles +
          " px-4 py-2 text-xs md:text-sm border placeholder:text-primary-light-5 dark:placeholder:text-gray-300/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light-1 focus:border-transparent dark:bg-dark dark:text-white invalid:ring-2 invalid:ring-red-500 invalid:border-transparent peer"
        }
        // onChange={onChange}
      />
    </div>
  );
};
