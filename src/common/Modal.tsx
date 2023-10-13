"use client";

import { ReactNode } from "react";
import Typography from "./Typography";
import { BsX } from "react-icons/bs";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";

interface IProps {
  children: ReactNode;
  cardClasses: string;
  title: string;
  onClose?: () => void;
}

export default function Modal({
  children,
  cardClasses,
  title,
  onClose: onCustomClose = () => {},
}: IProps) {
  const { onSetQueryState, searchParms } = useSearchQueryState();
  const onClose = () => {
    if (onCustomClose) {
      onCustomClose();
      return;
    }
    onSetQueryState("modal-status", undefined);
  };

  if (
    searchParms.get("modal-status") === "false" ||
    !searchParms.get("modal-status")
  )
    return <></>;

  return (
    <div
      onClick={onClose}
      className="flex justify-center items-center z-50 absolute top-0 left-0 h-full w-full"
    >
      <div onClick={(e) => e.stopPropagation()} className={cardClasses}>
        <div className="flex justify-between items-center">
          <Typography variant="h1">{title}</Typography>
          <div
            onClick={onClose}
            className="flex justify-center items-center h-12 w-12 cursor-pointer rounded-full"
          >
            <BsX fontSize={30} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
