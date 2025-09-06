import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

type ModalProps = {
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  const { children } = props;

  return createPortal(
    <div
      className={twMerge(
        "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-10"
      )}
    >
      {children}
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
