import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast"; // ✅ Importa el toaster

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUFATSEC · Soluciones digitales con propósito",
  description:
    "Desarrollo de software, automatización e inteligencia aplicada. LUFATSEC crea soluciones tecnológicas a medida para empresas que quieren escalar con eficiencia.",
  keywords: [
    "LUFATSEC",
    "desarrollo web",
    "automatización",
    "inteligencia artificial",
    "software a medida",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "LUFATSEC", url: "https://lufatsec.com" }],
  metadataBase: new URL("https://lufatsec.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-text-light antialiased selection:bg-secondary selection:text-white">
        <main className="min-h-screen flex flex-col">{children}</main>
        <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Toaster */}
      </body>
    </html>
  );
}
