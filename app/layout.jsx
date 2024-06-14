import { Kanit } from "next/font/google";
import "./globals.css";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/theme/theme-provider";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Teerakan Otklan | Portfolio",
  description:
    "This website is created to display related works by Teerakarn Otklan.",
  authors: [{ name: "Teerakan", url: "https://teerakanotklan.github.io" }],
  keywords: ["Teerakan", "Portfolio"],
  creator: "Teerakan",
  publisher: "Teerakan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kanit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
