import  {createContext } from 'react';

export interface ITodo {
    mRespon: boolean;
    setMRespan: string;
}
export type TodoContextType = {
    mRespon: boolean |null;
    setMRespan: any |null;
    clicker:()=>void;
};


const Context =createContext<TodoContextType | null>({
    mRespon:null,
    setMRespan:null,
    clicker:()=>null
})

export default Context