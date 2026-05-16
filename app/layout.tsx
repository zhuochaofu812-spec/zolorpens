import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zolor Pens | 黑金金属笔高级官网",
  description: "以 Apple 式克制与 Montblanc 式匠艺表达打造的高端黑金金属笔官网。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
