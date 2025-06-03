import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        
        <ClerkProvider appearance={{
          variables: {
            colorPrimary: "#4f46e5",
            colorText: "#1e293b",
            colorBackground: "#f8fafc",
            colorDanger: "#dc2626",
          }}}>
            
          <Navbar/>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
