type Props = {
  displayUserName: string;
  isUserOnline?: boolean;
  onClick?: () => void;
};

export const AvatarProfileButton = ({
  displayUserName,
  isUserOnline,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative pt-[2px] flex text-center leading-loose items-center justify-center text-[16px] h-10 w-10 bg-gray-200/[0.40] rounded-full"
    >
      {isUserOnline && <span className="avatar-isUserActive"></span>}
      {displayUserName}
    </button>
  );
};
