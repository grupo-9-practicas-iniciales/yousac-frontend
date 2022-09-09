import { Field } from "formik";

type Props = {
  autoComplete?: string;
  classStyles?: string;
  label?: string;
  placeholder: string;
  name: string;
  type?: string;
};

export const TextField = ({
  autoComplete = "off",
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
          className="text-xs md:text-sm my-3 text-primary-light-2 dark:text-white"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field }: any) => (
          <input
            className={`px-4 py-2 text-xs md:text-sm border placeholder:text-primary-light-5 dark:placeholder:text-gray-300/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light-1 focus:border-transparent dark:bg-dark dark:text-white invalid:ring-2 ${classStyles}`}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            {...field}
          />
        )}
      </Field>
    </div>
  );
};
