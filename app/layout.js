import "./globals.css";

export const metadata = {
  title: "FXCup",
  description: "Track your trading, build a verified record, and compete.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
