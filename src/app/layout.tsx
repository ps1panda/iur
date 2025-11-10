import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  display: "swap",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  display: "swap",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Invest Urban Rent — Управление коммерческой недвижимостью",
  description:
    "Комплексное управление объектами коммерческой недвижимости: от идеи и проектирования до стабильного пассивного дохода.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
