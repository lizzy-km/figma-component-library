import { ReactNode } from "react";
interface Props {
    initialValues?: any;
    onFinish?: (values: any) => void;
    children: ReactNode;
}
export default function Form({ initialValues, onFinish, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
