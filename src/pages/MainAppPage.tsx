import { useAuthStore } from "../hooks/useAuthStore";
import { Navbar } from '../components/ui/navbar/Navbar';
import { SearchSection, WavyFooter } from "../components";

export const MainAppPage = () => {
  const { user } = useAuthStore();

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-dark overflow-x-hidden transition-colors">
        <Navbar user={user} />
        <div className="flex flex-col justify-center items-center">
          <SearchSection />
        </div>
      </main>
      <WavyFooter />
    </>
  )
};
