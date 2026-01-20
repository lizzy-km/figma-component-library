// useFormContext.ts
import { useContext } from "react";
import { FormContext } from "../../FormContext";

export function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) {
    throw new Error("Form.Item must be used inside <Form />");
  }
  return ctx;
}
