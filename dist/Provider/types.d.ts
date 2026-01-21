import React, { ReactNode } from "react";
export type ThemeProps = "light" | "dark";
export interface ThemeContextType {
    theme: ThemeProps;
    toggleTheme: () => void;
}
export interface FormDataProps {
    [key: string]: never;
}
export interface ProviderContextType {
    formData: {
        [key: string]: never;
    };
    setFormData: React.Dispatch<FormDataProps>;
}
export interface FormContextType {
    formData: {
        [key: string]: never;
    };
    setFormData: React.Dispatch<FormDataProps>;
    resetFormdata: () => void;
}
export interface ProviderProps {
    children: ReactNode;
}
