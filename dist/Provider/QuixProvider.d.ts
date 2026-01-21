import type { FormContextType, ProviderContextType, ThemeContextType } from "./types";
export declare const ThemeContext: import("react").Context<ThemeContextType | undefined>;
export declare const QuixProvider: import("react").Context<ProviderContextType | undefined>;
export declare const FormProvider: import("react").Context<FormContextType | undefined>;
export declare function useForm(): FormContextType | undefined;
