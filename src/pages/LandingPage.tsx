import { Link } from "react-router-dom";
import { RocketSVG } from "../assets";
import { AppLogo, WavyFooter } from "../components";
import { useNewTitle } from "../hooks";

export const LandingPage = () => {
  useNewTitle("");
  return (
    <>
      <main className="min-h-screen bg-light dark:bg-dark overflow-x-hidden transition-colors">
        <nav className="h-[10vh] flex items-center justify-around">
          <AppLogo />
          <Link
            className="text-black dark:text-white font-bold text-base lg:text-xl hover:text-gray-100"
            to="/login"
          >
            Iniciar sesión
          </Link>
        </nav>
        <section className="h-[73vh] flex flex-col justify-evenly gap-y-8 mt-10">
          <RocketSVG className="w-full h-full " viewBox="0 0 326 239" />
          <h2 className="text-black text-center text-[16px] lg:text-[22px] mb-14">
            Las mejores Recomendaciones
          </h2>
        </section>
        <WavyFooter />
      </main>
    </>
  );
};
