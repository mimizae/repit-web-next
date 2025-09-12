import type { Metadata } from "next";
import "/style/globals.css";

export const metadata: Metadata = {
  title: "Re:PiT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased mx-auto w-[500px] flex flex-col items-center min-h-screen shadow-[-5px_0_10px_-5px_rgba(0,0,0,0.1),5px_0_10px_-5px_rgba(0,0,0,0.1)]">
        {children}
      </body>
    </html>
  );
}
