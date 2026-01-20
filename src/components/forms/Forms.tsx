/* eslint-disable @typescript-eslint/no-explicit-any */
// Form.tsx
import { ReactNode, useRef } from "react";
import { FormStore } from "./store/form.store";
import { FormContext } from "../../Provider/FormContext";


interface Props {
  initialValues?: any;
  onFinish?: (values: any) => void;
  children: ReactNode;
}

export default function Form({ initialValues = {}, onFinish, children }: Props) {
  const storeRef = useRef<FormStore|null>(null);
  if (!storeRef.current) {
    storeRef.current = new FormStore(initialValues);
  }

  return (
    <FormContext.Provider value={storeRef.current}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFinish?.(storeRef.current!.getValues());
        }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}
