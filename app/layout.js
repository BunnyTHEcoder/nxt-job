"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./utils/store";
const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
