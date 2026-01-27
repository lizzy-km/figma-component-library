import { styled } from "storybook/theming";

export const Div = ({ css }: { css: string }) => styled.div`${css}`

export const P = ({ css }: { css: string }) => styled.p`${css}`

export const Input = ({ css }: { css: string }) => styled.input`${css}`

export const Section = ({ css }: { css: string }) => styled.section`${css}`

// export const CustomElement = ({
//     tagType,
//     css
// }: {
//     tagType: string,
//     css: string
// }) => { 

//     const newElement =  styled.[tagType]`${css}`

//     return newElement
// }