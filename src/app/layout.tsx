import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LLama Homepage",
  description: "Welcome to the LLama homepage!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider
          theme={{
            primaryColor: 'violet', // Set the primary color to violet (purple shade)
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
