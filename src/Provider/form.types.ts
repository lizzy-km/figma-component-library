import React from "react";

// form.types.ts
export type FormValues = Record<string, unknown>;

export interface FormContextType {
  values: FormValues;
  setFieldValue: (name: string, value: unknown) => void;
  registerField: (name: string) => void;
  submit: () => void;
  resetFields:()=>void
}

export interface FieldProps {
  value?: unknown;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}