"use client";

import Alert from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useState } from "react";

export default function SettingsPage() {
  const [deleteAlertState, setDeleteAlertState] = useState(false);
  const [saveAlertState, setSaveAlertState] = useState(false);

  const handleDelete = async () => {
    console.log("Account deleted");
    setDeleteAlertState(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-12 px-12 pt-12">
        <div className="border-b border-white/10 pb-12">
          <h1 className="font-semibold text-white">Profile</h1>
          <p className="mt-1 text-sm/6 text-gray-400">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <Input label="username" placeholder="enter your username" />
              <Input
                label="about"
                placeholder="enter information about yourself"
              />
            </div>
            {deleteAlertState && (
              <Alert
                text="Are you sure you want to delete your account?"
                onConfirm={handleDelete}
                onCancel={() => setDeleteAlertState(false)}
              />
            )}
            {saveAlertState && (
              <Alert
                text="Changes made successfully."
                onCancel={() => setSaveAlertState(false)}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <Button className="ml-12 mt-4" variant="outline">
          Save
        </Button>
        <Button
          className="ml-4 mt-4"
          variant="outline"
          color="red"
          onClick={() => setDeleteAlertState(true)}
        >
          Delete
        </Button>
      </div>
    </form>
  );
}
