'use client';

import Button from '@/common/Button';
import InputField from '@/common/InputField';
import Modal from '@/common/Modal';
import Toggle from '@/common/Toggle';

export default function CreateBankFormModal() {
  console.log('Modal');

  return (
    <Modal title="Create Bank" cardClasses="bg-base-300 p-5 rounded">
      <form>
        <div className="flex justify-start items-center gap-5">
          <div className="w-full">
            <InputField inputType="text" name="title" label="Name" />
          </div>
          <div className="w-full">
            <InputField inputType="text" name="slug" label="Slug" />
          </div>
        </div>
        <Toggle name="isActive" label="Is Active" />
        <Button options="my-0 mt-5">Create Bank</Button>
      </form>
    </Modal>
  );
}
