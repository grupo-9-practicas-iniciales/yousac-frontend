import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./router";
import { Toaster } from 'react-hot-toast';
import { ToogleThemeButton } from './components';

export const YousacApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster
        toastOptions={
          {
            className: 'bg-light dark:bg-darkContrast text-black dark:text-white',
          }
        }
      />
      <ToogleThemeButton fab={true} />
    </BrowserRouter>
  );
};
