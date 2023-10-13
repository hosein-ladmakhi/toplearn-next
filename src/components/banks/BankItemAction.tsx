"use client";

import { deleteBankAction } from "@/app/dashboard/banks/action";
import ButtonGroup from "@/common/ButtonGroup";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { Bank, IButtonGroup } from "@/types";
import { useRouter } from "next/navigation";
import { useMemo, useTransition } from "react";

interface IProps {
  selectedBank: Bank;
}

export default function BankItemAction({ selectedBank }: IProps) {
  const [deletePending, deleteTransition] = useTransition();
  const { onSetQueryState } = useSearchQueryState();

  const onDeleteBank = () =>
    deleteTransition(() => {
      deleteBankAction(selectedBank!);
    });

  const onUpdateBank = (event: React.MouseEvent) => {
    event.stopPropagation();
    onSetQueryState("modal-status", true);
    onSetQueryState("updated-bank", selectedBank.id);
  };

  const actions: IButtonGroup[] = useMemo(() => {
    return [
      {
        action: onDeleteBank,
        type: "server",
        text: "Delete",
        className: "mt-5 mr-2",
      },
      {
        action: onUpdateBank,
        type: "client",
        text: "Update",
        className: "mt-5",
      },
    ];
  }, [selectedBank]);

  return (
    <ButtonGroup loading={deletePending} type="server" actions={actions} />
  );
}
