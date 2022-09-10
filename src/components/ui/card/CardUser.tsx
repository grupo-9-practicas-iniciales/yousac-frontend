import { UserInterface } from "../../../api";
import { Avatar } from "../../";
import { Link } from "react-router-dom";

type CardUserProps = {
  user: UserInterface;
};

export const CardUser = ({ user }: CardUserProps) => {
  return (
    <>
      <div className="flex space-x-3 md:space-x-4 lg:space-x-5">
        <Avatar user={user} />
        <div className="flex flex-col text-sm md:text-base text-left w-full">
          <h3 className="font-medium">
            {user.names} {user.lastnames}
          </h3>
          <p>
            <strong>Registro académico: </strong>
            {user.idStudent}
          </p>
        </div>
        <Link
          to={`/user/${user.idStudent}`}
          className="text-info-dark-3 text-sm"
        >
          Ver más
        </Link>
      </div>
    </>
  );
};
