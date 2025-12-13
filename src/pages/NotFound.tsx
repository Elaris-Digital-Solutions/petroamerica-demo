import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex flex-col min-h-[60vh] items-center justify-center bg-muted/30 section-container section-padding">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-corporate-navy">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Lo sentimos, la página que buscas no existe.</p>
          <a href="/" className="inline-flex h-10 items-center justify-center rounded-md bg-corporate-navy px-8 text-sm font-medium text-white transition-colors hover:bg-corporate-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Volver al Inicio
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
