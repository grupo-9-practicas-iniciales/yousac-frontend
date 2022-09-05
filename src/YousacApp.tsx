import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./router";

export const YousacApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
