import { Link } from "react-router-dom";
import { Waves1SVG, RocketSVG } from "../assets";
import { DownArrowIcon } from "../assets/icons/DownArrowIcon";
import { ToogleThemeButton } from "../components/theme/ToogleThemeButton";
import { Avatar } from "../components/ui";
import { User } from "../context/auth";

const testInitialUser2: User = {
  names: "Jorge",
  lastnames: "Garcia",
  email: "a",
  idStudent: "123",
  idUser: "asdada",
  token: "",
};

export const LandingPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-dark overflow-x-hidden transition-colors">
      <nav className="h-[10vh] flex items-center justify-around">
        <h1 className="text-logo font-bold text-[28px] lg:text-[36px]">
          YOUSAC
        </h1>
        <Link
          className="text-black font-bold text-[12px] lg:text-[16px] hover:text-gray-100"
          to="/login"
        >
          Iniciar sesión
        </Link>
        <Avatar user={testInitialUser2} />
      </nav>
      <section className="h-[70vh] flex flex-col gap-y-8 mt-10">
        <RocketSVG className="w-full h-full " viewBox="0 0 326 239" />
        <h2 className="text-black text-center text-[16px] lg:text-[22px]">
          Las mejores Recomendaciones
        </h2>
        <div className="flex justify-center items-center">
          <DownArrowIcon className="text-primary-light-1 dark:text-primary-dark-1 text-2xl lg:text-3xl" />
        </div>
      </section>
      <div className="h-[10vh] absolute bottom-0 right-0 w-full">
        <Waves1SVG
          className="w-full"
          preserveAspectRatio="none"
          viewBox="0 0 300 100"
        />
      </div>
      <ToogleThemeButton fab={true} />
    </main>
  );
};
