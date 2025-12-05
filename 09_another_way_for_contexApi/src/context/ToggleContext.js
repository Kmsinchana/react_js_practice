import { useContext } from "react";
import { createContext } from "react";

export const ToggleContext = createContext({
    theamMode : "light",
    IdentifyMode(){
    }
})

export const ToggleContextProvider = ToggleContext.Provider;

export default function ToggleUseContext(){
    return useContext(ToggleContext)
}