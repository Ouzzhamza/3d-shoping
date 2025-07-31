import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "3D Shop",
  description: "A modern 3D web application built with Next.js",
};

// Since we can't access locale in root layout, we'll set it dynamically
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
