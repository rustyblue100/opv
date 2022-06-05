import { createContext } from "react";

interface AppContextInterface {
  menuHover: boolean;
  clicked: boolean;
  distanceFromLeftBorderWindow: number;
}

export const Context = createContext<AppContextInterface | null>(null);
