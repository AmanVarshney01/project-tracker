"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { deleteTask } from "@/server/actions";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useState } from "react";

export default function DeleteTaskButton({
  projectId,
  taskId,
}: {
  projectId: number;
  taskId: number;
}) {
  const [open, setOpen] = useState(false);

  async function onSubmit() {
    await deleteTask(projectId, taskId);
    toast.success("Task deleted successfully");
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-full gap-2" variant={"destructive"}>
          <TrashIcon />
          Delete
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-8">
          <SheetTitle>Delete Task</SheetTitle>
          <SheetDescription>
            Are you sure you want to delete this task?
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <form action={onSubmit}>
              <Button variant={"destructive"}>Delete</Button>
            </form>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
