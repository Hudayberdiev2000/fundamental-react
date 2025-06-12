import cls from './myInput.module.css'


interface MyInputProps extends React.InputHTMLAttributes<
    HTMLInputElement
>{
    className?: string;
}

const MyInput = (props: MyInputProps) => {
    const { className = "", ...rest } = props;
    return (
            <input className={`${cls.myInput} ${className}`} {...rest} />
    );
};

export default MyInput;