import { Link } from "react-router-dom";
import { Avatar } from "../../";
import { UserInterface } from "../../../api";

type CardPostProps = {
  user: UserInterface;
  idPost?: number;
};

export const CardPost = ({ idPost = 12, user }: CardPostProps) => {
  return (
    <>
      <div className="flex space-x-3 md:space-x-4 lg:space-x-5">
        <Avatar user={user} />
        <div className="flex flex-col text-sm lg:text-base text-left w-full font-medium">
          <h3>Lenguajes formales y de progrmación</h3>
          <p className="text-gray-100">
            {`${user.names} ${user.lastnames} - 20 de septiembre de 2021`}
          </p>
        </div>
      </div>
      <h4 className="text-center text-base lg:text-lg font-semibold">
        ¿Recomendaciones para LFP?
      </h4>
      <div className="flex flex-col text-xs md:text-sm space-y-2 dark:text-white">
        <p>
          {" "}
          <strong>Código: </strong> 0110
        </p>
        <p>
          <strong>Catedrático: </strong>
          Ing. José Luis
        </p>
        <div className="flex justify-between">
          <p>
            <strong>Sección: </strong>N
          </p>
          <Link to={`/post/${idPost}`} className="text-info-dark-3">
            Ver más
          </Link>
        </div>
      </div>
    </>
  );
};
