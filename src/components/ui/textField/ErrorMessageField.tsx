type Props = {
  message: string;
};

export const ErrorMessageField = ({ message }: Props) => {
  return <p className="text-xs md:text-sm text-left mt-1 text-error-light-3 dark:text-error-dark-2">{message}</p>;
};
