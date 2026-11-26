import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description =
  "Take command of GSX Pro ground services, local AI voice control, and realistic airline turnarounds in Microsoft Flight Simulator 2024.";

export const metadata: Metadata = {
  title: "Ground Manager Pro — Ground Operations for MSFS 2024",
  description,
  applicationName: "Ground Manager Pro",
  keywords: [
    "Ground Manager Pro",
    "MSFS 2024",
    "Microsoft Flight Simulator",
    "FSDT GSX Pro",
    "flight simulation",
    "local AI copilot",
    "ground handling",
  ],
  authors: [{ name: "TurnaroundStudio / V-ONE Studios" }],
  creator: "TurnaroundStudio / V-ONE Studios",
  openGraph: {
    title: "Ground Manager Pro — Ground Operations for MSFS 2024",
    description,
    siteName: "Ground Manager Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ground Manager Pro — Ground Operations for MSFS 2024",
    description,
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0b111e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
