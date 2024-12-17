import "./globals.css"; // Import global styles
import { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import { Notification_C } from "@/components/Notification_C";
import Header_C from "@/components/Header_C";

export const metadata: Metadata = {
  title: "My App",
  description: "This is my Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StoreProvider>
          <header className="header">
            <Notification_C />
            <Header_C />
          </header>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
