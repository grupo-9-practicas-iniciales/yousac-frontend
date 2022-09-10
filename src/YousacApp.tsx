import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./router";
import { Toaster } from 'react-hot-toast';
import { ToogleThemeButton } from './components';
import { useMediaQuery } from './hooks';

export const YousacApp = () => {

  const largeScreen = useMediaQuery('(min-width: 640px)');

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={
          {
            className: 'bg-light dark:bg-darkContrast text-black dark:text-white text-xs md:text-sm',
          }
        }

        position={
          largeScreen ? 'top-right' : 'bottom-center'
        }
      />
      <AppRouter />
      <ToogleThemeButton fab={true} />
    </BrowserRouter>
  );
};
