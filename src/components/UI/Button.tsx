import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariants = "default" | "small" | "large" | "disabled";
type ButtonType = "basic" | "destructive";

interface ButtonVariantType {
  default: string;
  small: string;
  large: string;
  disabled: string;
}

interface ButtonTypeData {
  basic: string;
  destructive: string;
}

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariants;
  disabled?: boolean;
  btnType?: ButtonType;
} & HTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { children, btnType="basic", variant = "default", disabled, ...rest } = props;

  const baseStyles =
    "font-bold py-2 px-6 m-1 rounded-lg cursor-pointer text-white";

  const colors: ButtonTypeData = {
    basic: "bg-black hover:bg-gray-800 active:bg-gray-900",
    destructive: "bg-red-600 hover:bg-red-700 active:bg-red-800",
  };

  const variants: ButtonVariantType = {
    default: "",
    small: "py-1.5 px-3 text-sm",
    large: "py-4 px-8 text-lg",
    disabled: "cursor-not-allowed opacity-50",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      {...rest}
      className={twMerge(
        baseStyles,
        colors[btnType],
        variants[variant],
        disabled ? disabledStyles : ""
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
