import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CursorWave from "@/components/CursorWave";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "TechNest — SAP, ABAP & Web",
  description: "Enterprise-grade SAP, ABAP, and web experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main id="main">
          {children}
          {/* <CursorWave/> */}
          <SmokeyCursor
            simulationResolution={64}
            dyeResolution={512}
            densityDissipation={5}
            velocityDissipation={3}
            enableShading={false}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
