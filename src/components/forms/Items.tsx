// FormItem.tsx
// import React, { ReactElement, cloneElement } from "react";
// import { useFormContext } from "../../Provider/hooks/FormHook/useFormContext";
// import { FieldProps } from "../../Provider/form.types";

// interface FormItemProps {
//     name: string;
//     children: ReactElement<FieldProps>;
// }


// export default function FormItem({ name, children }: FormItemProps) {
//     const { values, setFieldValue } = useFormContext();

//     return cloneElement(children, {

//         value: (values[name]) ?? "",
//         onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
//             const value = (e?.target) ? e.target.value : e;
//             setFieldValue(name, (value));

//             children.props.onChange?.(e);

//         },
//     });
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
// FormItem.tsx
import {
  ReactElement,
  cloneElement,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { FormContext } from "../../Provider/FormContext";
import { FieldProps } from "../../Provider/form.types";

interface Props {
  name?: string;
  valuePropName?: string;
  getValueFromEvent?: (e: any) => any;
  shouldUpdate?: boolean | ((prev: any, next: any) => boolean);
      children: ReactElement<FieldProps> | ((ctx: any) => ReactElement<FieldProps> );

}

export default function FormItem({
  name,
  valuePropName = "value",
  getValueFromEvent,
  shouldUpdate,
  children,
}: Props) {
  const store = useContext(FormContext)!;
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {

    if (!name && shouldUpdate) {
       store.subscribe("*", forceUpdate);
    }
    if (name) {
       store.subscribe(name, forceUpdate);
    }
  }, [(name)]);

  // shouldUpdate render-props
  if (typeof children === "function") {
    return children({ values: store.getValues() });
  }

  if (!name) return children;

  const value = store.getValue(name);

  return cloneElement(children, {
    [valuePropName]: value,
    onChange: (e: any) => {
      const v = getValueFromEvent
        ? getValueFromEvent(e)
        : e?.target?.[valuePropName] ?? e;
      store.setValue(name, v);
      children.props.onChange?.(e);
    },
  });
}


