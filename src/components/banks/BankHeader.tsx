"use client";

import Button from "@/common/Button";
import Typography from "@/common/Typography";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";

interface IProps {
  banksCount: number;
}

export default function BankHeader({ banksCount }: IProps) {
  const { onSetQueryState } = useSearchQueryState();

  const onOpenCreateBank = () => onSetQueryState("modal-status", true);

  return (
    <div className="flex justify-between items-end pb-2 mb-3 border-b-2 border-gray-600">
      <Typography variant="h1">Banks ({banksCount})</Typography>
      <Button options="my-1" onClick={onOpenCreateBank}>
        Create Bank
      </Button>
    </div>
  );
}
