import type { Metadata } from "next";
import "./globals.css";
import { Inter, League_Spartan, Outfit } from 'next/font/google'

const leagueSpartan = League_Spartan({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-league-spartan'
})

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit'
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Projeto Timely",
  description: "Sua agenda de forma fácil",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${leagueSpartan.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="flex flex-col justify-center w-screen h-screen items-center">{children}</body>
    </html>
  );
}
