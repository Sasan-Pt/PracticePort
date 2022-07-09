import { createContext } from "react";

export type TodoContextType = {
  mRespon: boolean | null;
  setMRespan: any | null;
  clicker: () => void;
};

const Context = createContext<any>({
  mRespon: null,
  setMRespan: null,
  clicker: () => null,
});

export default Context;
