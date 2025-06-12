import type { FC, ReactNode } from "react";
import cls from "./myModal.module.css";

interface MyModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const MyModal: FC<MyModalProps> = (props) => {
  const { children, isOpen, onClose } = props;

  const rootClasses = [cls.myModal];

  if (isOpen) rootClasses.push(cls.active);

  const onContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={rootClasses.join(" ")} onClick={onClose}>
      <div onClick={onContentClick} className={cls.myModalContent}>
        {children}
      </div>
    </div>
  );
};
