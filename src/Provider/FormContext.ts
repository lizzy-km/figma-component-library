// FormContext.ts
import { createContext } from "react";
import { FormStore } from "../components/forms/store/form.store";

export const FormContext = createContext<FormStore | null>(null);