import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917676705762?text=Hi%20Swaroop,%20I%20visited%20your%20portfolio"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle />
    </a>
  );
}
