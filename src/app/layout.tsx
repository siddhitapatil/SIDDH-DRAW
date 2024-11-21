import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "./Providers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "SiddhDraw",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbi1saW5lIj48cGF0aCBkPSJNMTIgMjBoOSIvPjxwYXRoIGQ9Ik0xNi4zNzYgMy42MjJhMSAxIDAgMCAxIDMuMDAyIDMuMDAyTDcuMzY4IDE4LjYzNWEyIDIgMCAwIDEtLjg1NS41MDZsLTIuODcyLjgzOGEuNS41IDAgMCAxLS42Mi0uNjJsLjgzOC0yLjg3MmEyIDIgMCAwIDEgLjUwNi0uODU0eiIvPjwvc3ZnPg=="
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbi1saW5lIj48cGF0aCBkPSJNMTIgMjBoOSIvPjxwYXRoIGQ9Ik0xNi4zNzYgMy42MjJhMSAxIDAgMCAxIDMuMDAyIDMuMDAyTDcuMzY4IDE4LjYzNWEyIDIgMCAwIDEtLjg1NS41MDZsLTIuODcyLjgzOGEuNS41IDAgMCAxLS42Mi0uNjJsLjgzOC0yLjg3MmEyIDIgMCAwIDEgLjUwNi0uODU0eiIvPjwvc3ZnPg=="
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </head>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
