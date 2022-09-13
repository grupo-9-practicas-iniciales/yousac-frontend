import { Link } from "react-router-dom";

export const AppLogo = () => {
  return (
    <Link to={"/"} >
      <div className="text-logo font-bold text-[28px] lg:text-[36px]">
        YOUSAC
      </div>
    </Link>
  );
};
