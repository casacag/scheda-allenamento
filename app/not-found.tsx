import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
        Pagina non trovata
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
      >
        Torna alla home
      </Link>
    </div>
  );
}

