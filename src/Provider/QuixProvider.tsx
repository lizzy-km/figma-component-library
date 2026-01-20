import { createContext, useContext } from "react";
import type { FormContextType, ProviderContextType, ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export const QuixProvider = createContext<ProviderContextType | undefined>(undefined)

export const FormProvider = createContext<FormContextType | undefined>(undefined)

// export default function QuixProvider({ children }: ProviderProps) {
//     const [theme, setTheme] = useState<ThemeProps>("light");

//     const toggleTheme = () => {
//         setTheme(prev => (prev === "light" ? "dark" : "light"));
//     };


//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>

//             {children}

//         </ThemeContext.Provider>
//     )
// }


export function useForm (){
    const context = useContext(FormProvider)

    return context
}