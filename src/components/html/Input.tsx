import React from "react";

type InputProps = React.ComponentProps<'input'>

export const CustomInputProps = (props: InputProps) => {
    return <input {...props} />
}