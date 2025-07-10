type DefautInputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function DefautInput({ id, labelText, type, ...rest }: DefautInputProps) {
    return (
        <>
        {labelText && <label htmlFor={id}>{labelText}</label>}
       
        <input id={id} type={type} {...rest} />
       </> 
    )
}