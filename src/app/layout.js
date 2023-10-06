import NavBar from "@/components/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Toast from "@/components/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Personify",
  description: "PWA web app for your Contacts.",
  manifest: "/manifest.json",
  themeColor: "#191a19",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toast />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
