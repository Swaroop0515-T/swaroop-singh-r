import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import WhatsAppButton from "../components/whatsapp/WhatsAppButton";

export const metadata = {
  title: "Swaroop Singh R | RPA Developer",
  description:
    "Portfolio of Swaroop Singh R – RPA Developer skilled in UiPath, Power Automate, and enterprise automation solutions.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <WhatsAppButton />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
