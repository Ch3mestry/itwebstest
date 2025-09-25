"use client";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { createPostFormData } from "./api";

export function PostForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;

    const formData = new FormData();
    formData.append("text", text);
    if (file) formData.append("file", file);

    try {
      await createPostFormData(formData);
      setIsOpen(false);
      setText("");
      setFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="mx-auto max-w-xs my-4 flex w-full">
        <Button onClick={() => setIsOpen(true)}>Открыть форму</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Отправка данных</DialogTitle>
          <DialogDescription>Заполните форму и отправьте</DialogDescription>
        </DialogHeader>
        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Текст"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="border rounded px-3 py-2"
          />
          <Button type="submit">Отправить</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
