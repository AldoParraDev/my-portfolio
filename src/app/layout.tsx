import { Footer, Header } from "@/components/ui";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Aldo Parra",
  description:
    "Desarrollador Frontend apasionado por crear experiencias web excepcionales. Combino diseño y código para construir interfaces interactivas y optimizadas que cautivan a los usuarios. Explora mi portafolio y descubre mi enfoque en la creación de soluciones web intuitivas y atractivas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
