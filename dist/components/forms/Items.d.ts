import { ReactElement } from "react";
import { FieldProps } from "../../Provider/form.types";
interface Props {
    name?: string;
    valuePropName?: string;
    getValueFromEvent?: (e: any) => any;
    shouldUpdate?: boolean | ((prev: any, next: any) => boolean);
    children: ReactElement<FieldProps> | ((ctx: any) => ReactElement<FieldProps>);
}
export default function FormItem({ name, valuePropName, getValueFromEvent, shouldUpdate, children, }: Props): ReactElement<FieldProps, string | import("react").JSXElementConstructor<any>>;
export {};
