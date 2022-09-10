import { UserInterface } from "../../../api/api.types";
import { Avatar } from "../avatar/Avatar";

type CardProps = {
  children: React.ReactNode;
  user: UserInterface;
  className?: string;
};

const testUser: UserInterface = {
  idUser: 1,
  idStudent: "",
  names: "",
  lastnames: "",
  email: "",
};

export const Card = ({ children, className, user }: CardProps) => {
  return (
    <div
      className={
        className +
        `flex flex-col space-y-5 bg-primary-light-5/90 dark:bg-darkContrast m-6 min-w-min max-w-md p-5 rounded-md`
      }
    >
      <div className="flex space-x-4">
        <Avatar user={user} />
        <div className="flex flex-col font-semibold text-center">
          <h3>¿Recomendaciones para LFP?</h3>
          <p className="text-gray-100"> Usuario - 28 de febrero de 2022 </p>
        </div>
      </div>
      {children}
    </div>
  );
};
