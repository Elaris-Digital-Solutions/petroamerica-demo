import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gracias() {
    return (
        <PageLayout>
            <div className="min-h-[60vh] flex flex-col items-center justify-center section-container section-padding text-center">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h1 className="text-4xl font-bold text-corporate-navy mb-4">¡Mensaje Recibido!</h1>
                <p className="text-xl text-muted-foreground max-w-md mx-auto mb-8">
                    Hemos recibido tu información correctamente. Nuestro equipo se pondrá en contacto contigo a la brevedad posible.
                </p>
                <Link to="/">
                    <Button size="lg" className="bg-corporate-navy hover:bg-corporate-dark">
                        Volver al Inicio
                    </Button>
                </Link>
            </div>
        </PageLayout>
    );
}
