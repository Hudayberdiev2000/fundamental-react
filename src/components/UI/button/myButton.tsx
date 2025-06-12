import cls from './myButton.module.css'

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    className?: string
}

const MyButton = (props: MyButtonProps) => {
    const { children, ...rest } = props;
    return (
        <button {...rest} className={cls.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;