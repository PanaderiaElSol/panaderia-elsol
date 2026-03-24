import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56912345678?text=Hola!%20Quiero%20hacer%20un%20pedido";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-card font-body font-bold px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Hacer pedido por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Hacer Pedido</span>
    </a>
  );
};

export default WhatsAppButton;
