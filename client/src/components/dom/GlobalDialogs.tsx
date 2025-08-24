"use client";

import { useDialogStore } from "@/zustand/AuthStore";
import LoginDialog from "./LoginDialog";
// import SignUpDialog from './SignUpDialog';
// import ForgotPasswordDialog from './ForgotPasswordDialog';

export function GlobalDialogs() {
  const { activeDialog, closeDialog } = useDialogStore();

  return (
    <>
      <LoginDialog
        isOpen={activeDialog === "login"}
        onClose={closeDialog}
      />
      {/* <SignUpDialog isOpen={activeDialog === 'signup'} /> */}
      {/* <ForgotPasswordDialog isOpen={activeDialog === 'forgotPassword'} /> */}
    </>
  );
}
