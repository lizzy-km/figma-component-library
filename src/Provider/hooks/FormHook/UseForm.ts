// useForm.ts
import { useState } from "react";
import { FormValues } from "../../form.types";

export function useForm(initialValues: FormValues = {}) {
  const [values, setValues] = useState<FormValues>(initialValues);

  const setFieldValue = (name: string, value: unknown) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  function resetFields(){
    setValues({})
  }

  return {
    values,
    setFieldValue,
    resetFields
  };
}
