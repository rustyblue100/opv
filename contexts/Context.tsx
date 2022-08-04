import { createContext } from "react";

interface AppContextInterface {
  menuHover: boolean;
  clicked: boolean;
  distanceLeft: number;
  distanceLeftHover: number;
  previousRoute: string | null;
  meta: { title: string; description: string };
}

export const Context = createContext<AppContextInterface | null>(null);
