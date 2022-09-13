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
            className="text-black font-bold text-[12px] lg:text-[16px] hover:text-gray-100"
            to="/login"
          >
            Iniciar sesión
          </Link>
        </nav>
        <section className="h-[70vh] flex flex-col gap-y-8 mt-10">
          <RocketSVG className="w-full h-full " viewBox="0 0 326 239" />
          <h2 className="text-black text-center text-[16px] lg:text-[22px]">
            Las mejores Recomendaciones
          </h2>
          <div className="flex justify-center items-center">
            {/* <DownArrowIcon className="text-primary-light-1 dark:text-primary-dark-1 text-2xl lg:text-3xl" /> */}
          </div>
          {/* <Card>
            <CardPost user={testInitialUser2} />
          </Card>
          <Card>
            <CardUser user={testInitialUser2} />
          </Card> */}
        </section>
      </main>
      <WavyFooter />
    </>
  );
};
