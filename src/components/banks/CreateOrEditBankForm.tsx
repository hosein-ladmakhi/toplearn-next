"use client";

import {
  createBankAction,
  updateBankAction,
} from "@/app/dashboard/banks/action";
import Button from "@/common/Button";
import InputField from "@/common/InputField";
import Modal from "@/common/Modal";
import Toggle from "@/common/Toggle";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { getBankById } from "@/services";
import { CreateOrUpdateBankPayload } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";

export const createBankValidation = zod.object({
  name: zod
    .string({ required_error: "You must provided bank name" })
    .min(3, "Your name must be more than 3 character"),
  slug: zod
    .string({ required_error: "You must provided bank slug" })
    .min(3, "Your name must be more than 3 character"),
  isActive: zod.boolean().optional(),
});

export default function CreateOrEditBankFormModal() {
  const { searchParms } = useSearchQueryState();
  const defaultBankId = searchParms.get("updated-bank");

  const { control, handleSubmit, reset, setValue } =
    useForm<CreateOrUpdateBankPayload>({
      resolver: zodResolver(createBankValidation),
      defaultValues: {
        isActive: false,
        name: "",
        slug: "",
      },
    });

  useEffect(() => {
    if (defaultBankId) {
      getBankById(+defaultBankId).then((bank) => {
        console.log(bank);
        setValue("isActive", !!bank.isActive);
        setValue("name", bank.name);
        setValue("slug", bank.slug);
        return bank;
      });
    }
  }, [defaultBankId]);

  const [isCreateBankPending, startBankCreation] = useTransition();

  const { onSetQueryState } = useSearchQueryState();

  const onSubmit = async (data: CreateOrUpdateBankPayload) =>
    startBankCreation(() => {
      defaultBankId
        ? updateBankAction(+defaultBankId, data)
        : createBankAction(data);
      onCloseModal();
    });

  const onCloseModal = () => {
    onSetQueryState("updated-bank", undefined);
    onSetQueryState("modal-status", undefined);
    reset();
  };

  const actionText = defaultBankId ? "Update Bank" : "Create Bank";

  return (
    <Modal
      onClose={onCloseModal}
      title={actionText}
      cardClasses="bg-base-300 p-5 rounded"
    >
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <div className="flex justify-start items-center flex-col sm:flex-row sm:gap-5">
          <div className="w-full">
            <InputField
              control={control}
              inputType="text"
              name="name"
              label="Name"
              containerClasses="my-1"
            />
          </div>
          <div className="w-full">
            <InputField
              control={control}
              inputType="text"
              name="slug"
              label="Slug"
              containerClasses="my-1"
            />
          </div>
        </div>
        <Toggle
          classes="w-full sm:w-3/12 my-1"
          name="isActive"
          label="Is Active"
          control={control}
        />
        <Button isLoading={isCreateBankPending} options="my-0 mt-5">
          {actionText}
        </Button>
      </form>
    </Modal>
  );
}
