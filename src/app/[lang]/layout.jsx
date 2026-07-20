import { Manrope } from "next/font/google";
import LayoutWrapper from "@/components/layout-wrapper";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "VisionSpace",
  description: "VisionSpace - leads generation, software development, and reputation management for businesses and individuals.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={ `${manrope.variable} h-full antialiased` }
    >
      <body className="min-h-full flex flex-col">
        <LayoutWrapper>
          { children }
        </LayoutWrapper>
      </body>
    </html>
  );
}
