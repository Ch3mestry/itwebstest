import type { Metadata } from "next";
import "@/app/globals.css";

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
      <body className="p-4">{children}</body>
    </html>
  );
}
