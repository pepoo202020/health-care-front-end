import "./globals.css"; // Import global styles
import { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import { Notification_C } from "@/components/Notification_C";

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
          <Notification_C />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
