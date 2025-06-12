import cls from './myInput.module.css'
import {forwardRef} from "react";


interface MyInputProps extends React.InputHTMLAttributes<
    HTMLInputElement
>{
    className?: string;
}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
    const { className = "", ...rest } = props;
    return (
            <input ref={ref} className={`${cls.myInput} ${className}`} {...rest} />
    );
});

export default MyInput;