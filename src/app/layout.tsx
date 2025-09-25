import type { Metadata } from "next";
import "@/app/globals.css";
import { PostForm } from "@/features/post-form/PostForm";

export const metadata: Metadata = {
  title: "ItWebsTest",
  description: "test task for ItWebs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="p-4">
        <PostForm />
        {children}
      </body>
    </html>
  );
}
