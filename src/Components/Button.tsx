import { ButtonProps } from "@/interfaces"

const Button = ({ key, onClick, timePeriod, value, label }: ButtonProps) => {
    return (
        <button
            key={key}
            onClick={() => onClick(value)}
            className={`mr-2 p-2 ${timePeriod === value && "bg-blue-500"}`}>
            {label}
        </button>
    )
}

export default Button
