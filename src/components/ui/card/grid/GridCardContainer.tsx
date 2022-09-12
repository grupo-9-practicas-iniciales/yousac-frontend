type GridCardContainerProps = {
  children?: React.ReactNode[];
  width?: string;
};
export const GridCardContainer = ({
  children,
  width = "w-full",
}: GridCardContainerProps) => {
  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6 justify-center align-middle ${width}`}
      >
        {children}
      </div>
    </>
  );
};
