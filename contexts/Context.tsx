import { createContext } from "react";

interface AppContextInterface {
  menuHover: boolean;
  clicked: boolean;
  distanceLeft: number;
  distanceLeftHover: number;
  previousRoute: string | null;
}

export const Context = createContext<AppContextInterface | null>(null);
