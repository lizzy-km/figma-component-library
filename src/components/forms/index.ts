/* eslint-disable @typescript-eslint/no-explicit-any */
// index.ts

import Form from "./Forms";
import FormItem from "./Items";

(Form as any).Item = FormItem;

export default Form;
