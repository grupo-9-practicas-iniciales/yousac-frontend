type Props = {
  displayUserName: string;
};

export const AvatarProfileButton = ({ displayUserName }: Props) => {
  return (
    <div className="relative flex items-center justify-center text-sm md:text-base h-10 w-10 md:h-12 md:w-12 bg-gray-200/[0.40] rounded-full">
      <span className="avatar-isUserActive"> </span>
      {displayUserName}
    </div>
  );
};
