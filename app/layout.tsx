import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scheda Fitness Home - Allenamento Settimanale",
  description:
    "Scheda di allenamento settimanale a casa con video YouTube, tracciamento progressi e esercizi per ogni giorno.",
  openGraph: {
    title: "Scheda Fitness Home",
    description:
      "Allenamento settimanale a casa con video e tracciamento progressi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Header/Navigation */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              💪 Scheda Fitness
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/scheda"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Tutti gli esercizi
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-12">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>
              Scheda Fitness Home · Allenati con costanza 💪
            </p>
            <p className="mt-2 text-xs">
              Consulta sempre un medico prima di iniziare un nuovo programma di
              allenamento.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

