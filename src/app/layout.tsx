import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invest Urban Rent — Управление коммерческой недвижимостью",
  description:
    "Комплексное управление объектами коммерческой недвижимости: от идеи и проектирования до стабильного пассивного дохода.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
