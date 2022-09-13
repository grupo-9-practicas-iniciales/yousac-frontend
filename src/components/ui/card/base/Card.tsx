type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={
        className +
        ` flex flex-col space-y-10 border border-gray-400 bg-white dark:border-none dark:bg-darkContrast/100 min-w-min p-5 rounded-md transition md:duration-300  md:hover:scale-105 md:hover:shadow-lg`
      }
    >
      {children}
    </div>
  );
};
