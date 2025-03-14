"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { useState } from "react";

export function SaveChanges() {
  const [changes, setChanges] = useState(false);

  return (
    <AlertDialog open={changes}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => setChanges(true)}
          className="bg-[#4D7C8A] min-h-[48px] min-w-[156px] px-4 py-2 text-white rounded-sm hover:bg-[#3a606d] transition text-lg font-normal cursor-pointer"
        >
          {changes ? "Save Changes" : "Edit Banners"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-black min-w-[640px] h-[400px] px-6 w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-semibold text-2xl flex flex-row justify-between px-3 items-center">
            <div className="font-semibold text-2xl flex flex-row justify-between border-b-2 border-b-[#E8E8E8] items-center w-full py-4">
              Message{" "}
              <XIcon
                className="cursor-pointer w-[32px]"
                onClick={() => setChanges(false)}
              />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="font-normal text-xl text-center my-16">
            Oops! You have unsaved changes.
            <br /> Are you sure you want to leave?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full justify-center items-center flex-row space-x-0 mx-auto">
          <div className="flex w-full justify-center items-center flex-row space-x-0 mx-auto space-x-5">
            {" "}
            <AlertDialogAction
              onClick={() => setChanges(false)}
              className="font-normal text-lg min-w-[213px] min-h-[24px] px-4 py-7 bg-[#4D7C8A] px-auto"
            >
              Yes, I want to leave
            </AlertDialogAction>
            <AlertDialogCancel
              onClick={() => setChanges(false)}
              className="font-normal text-lg min-w-[160px] min-h-[24px] px-4 py-7 px-auto"
            >
              Cancel
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
