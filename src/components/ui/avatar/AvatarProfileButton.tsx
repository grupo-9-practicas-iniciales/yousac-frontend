type Props = {
  displayUserName: string;
};

export const AvatarProfileButton = ({ displayUserName }: Props) => {
  return (
    <div className="relative flex items-center justify-center text-[16px] h-10 w-10 bg-gray-200/[0.40] rounded-full">
      <span className="avatar-isUserActive"> </span>
      {displayUserName}
    </div>
  );
};