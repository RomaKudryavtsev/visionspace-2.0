import { Manrope } from "next/font/google";
import LayoutWrapper from "@/components/layout-wrapper";
import { $t } from "@/utils/lang.utils";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { lang } = await params;

  return {
    title: $t("metadata.title", lang),
    description: $t("metadata.description", lang),
    keywords: $t("metadata.keywords", lang),
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  return (
    <html
      lang={ lang }
      className={ `${manrope.variable} h-full antialiased` }
    >
      <body className="min-h-full flex flex-col">
        <LayoutWrapper lang={ lang }>
          { children }
        </LayoutWrapper>
      </body>
    </html>
  );
}
