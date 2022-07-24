import { createContext } from "react";

interface AppContextInterface {
  menuHover: boolean;
  clicked: boolean;
  distanceLeft: number;
  distanceLeftHover: number;
}

export const Context = createContext<AppContextInterface | null>(null);
