import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "My App",
  description: "Rough App for KMCC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
            style={{
              backgroundColor: "LightBlue",
              padding: "1rem",
            }}
            >
          <p>Header</p>
        </header>
        {children}
        <footer style={{
              backgroundColor: "DarkRed",
              padding: "1rem",
            }}
            >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
