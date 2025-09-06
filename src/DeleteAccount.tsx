import { useState } from "react";
import Button from "./components/UI/Button";
import Modal from "./Modal";

const DeleteAccountModal = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [confirmText, setComfirmText] = useState("");

  const modalHandler = () => {
    setIsOpen((preState) => !preState);
  };

  const deleteAccHandler = () => {
    console.log("Account deleted");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 items-start border rounded-lg m-2 p-4 w-220">
      <h2 className="font-bold">Delete Account Modal</h2>
      <p className="text-gray-500">
        A destructive action modal that requires confirmation to proceed
      </p>
      <Button btnType="destructive" onClick={modalHandler}>
        Delete Account
      </Button>

      {open && (
        <Modal>
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex flex-col gap-4">
            <h1 className="font-bold">Delete Account</h1>
            <p className="text-sm text-gray-500">
              This action cannot be undone. This will permanently delete your
              account and remove all your data from our servers.
            </p>
            <label
              htmlFor="textDelete"
              className="text-sm font-medium text-gray-500"
            >
              Please type <span className="font-bold">DELETE</span> to confirm
            </label>
            <input
              type="text"
              id="textDelete"
              className="border rounded px-2 py-1"
              onChange={(e)=> setComfirmText(e.target.value.toLowerCase())}
            />
            <div className="flex justify-end gap-2">
              <Button onClick={modalHandler}>Cancel</Button>
              <Button btnType="destructive" onClick={deleteAccHandler} disabled={confirmText !== "delete"}>
                Delete Account
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DeleteAccountModal;
