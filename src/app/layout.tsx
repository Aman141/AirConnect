import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AirConnect - Explore Commercial Aircraft",
  description:
    "Detailed technical data about commercial aircraft and airline fleets worldwide. Browse and compare aircraft types from Boeing, Airbus, and more.",
  keywords:
    "aircraft, aviation, commercial aircraft, Boeing, Airbus, aircraft specifications, airline fleets",
  authors: [{ name: "AirConnect Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
