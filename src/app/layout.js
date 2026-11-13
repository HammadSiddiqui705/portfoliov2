import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Hammad | MERN Stack Developer",
  description: "Portfolio of Hammad, a MERN stack developer. Projects, skills and contact details.",
  openGraph: {
    title: "Hammad | MERN Stack Developer",
    description: "MERN stack developer portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.toggle("dark", localStorage.theme === "dark")`,
          }}
        />
      </head>
      <body className={`${poppins.className} bg-page text-ink antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}