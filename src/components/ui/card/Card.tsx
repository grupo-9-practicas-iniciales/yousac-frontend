type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={
        className +
        ` flex flex-col space-y-5 border border-gray-400 dark:border-none dark:bg-darkContrast/100 m-6 min-w-min max-w-sm md:max-w-md lg:max-w-lg p-5 rounded-md transition md:duration-300  md:hover:scale-105 md:hover:shadow-lg`
      }
    >
      {children}
    </div>
  );
};
