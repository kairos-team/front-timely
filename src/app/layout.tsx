import type { Metadata } from "next";
import "./globals.css";
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-league-spartan'
})

export const metadata: Metadata = {
  title: "Projeto Timely",
  description: "Sua agenda de forma fácil",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${leagueSpartan.variable}`}>
      <body>{children}</body>
    </html>
  );
}
