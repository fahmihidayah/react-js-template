import { ChangeEvent } from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type?: "text" | "number" | "email" | "password";
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string,
    error: string | undefined | null
}

export const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    type = "email",
    value = "",
    onChange,
    placeHolder,
    error = undefined
}) => {
    console.log(`label ${label} ${error}`)
    return <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={type}
            name={id}
            className="form-control"
            id={id} value={value}
            onChange={onChange}
            placeholder={placeHolder} 
            
            ></input>
        {error && <p className="text-danger" style={{fontSize: 13}}>{error}</p>}
    </div>
}
