import "./globals.css";
import SessionWrapper from "../components/SessionWrapper";
import Navbar from "../components/Navbar";

// Mantenha o title e description aqui
export const metadata = {
  title: "Joga Comigo",
  description: "Encontre parceiros para jogar online 🎮",
};

// Crie uma nova exportação para viewport
export const viewport = {
  themeColor: "#1A202C", // Mova o themeColor para cá
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Adicione o link para o manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        {/* Adicione o link para o ícone Apple Touch */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        {/* Adicione os favicons */}
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" type="image/png" />
      </head>
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}