import { createContext } from "react";

interface AppContextInterface {
  menuHover: boolean;
  clicked: boolean;
  distanceLeft: number;
  distanceLeftHover: number;
  previousRoute: () => void;
}

export const Context = createContext<AppContextInterface | null>(null);
