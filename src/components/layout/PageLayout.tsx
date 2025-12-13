import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  headerVariant?: "solid" | "transparent";
}

export function PageLayout({ children, headerVariant = "solid" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant={headerVariant} />
      <main className={`flex-grow ${headerVariant === "transparent" ? "pt-0" : "pt-24"} pb-16`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
