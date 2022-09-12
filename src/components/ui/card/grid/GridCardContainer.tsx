type GridCardContainerProps = {
  children?: React.ReactNode[];
};
export const GridCardContainer = ({ children }: GridCardContainerProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6 w-5/6 justify-center align-middle">
        {children}
      </div>
    </>
  );
};
