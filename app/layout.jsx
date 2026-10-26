import "./globals.css";

export const metadata = {
  title: "Lomo lomitos | Adopta con amor",
  description:
    "Encuentra a tu nuevo mejor amigo y aprende a darle una vida feliz, segura y llena de cariño.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
