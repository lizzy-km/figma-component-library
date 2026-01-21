import { FormValues } from "../../form.types";
export declare function useForm(initialValues?: FormValues): {
    values: FormValues;
    setFieldValue: (name: string, value: unknown) => void;
    resetFields: () => void;
};
