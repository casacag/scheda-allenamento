"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { DayPlan } from "@/types";

type Props = {
  day: DayPlan;
};

export default function DayCard({ day }: Props) {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const storageKey = `progress:${day.slug}`;
    const raw = localStorage.getItem(storageKey);
    const completed: string[] = raw ? JSON.parse(raw) : [];
    const total = day.exercises.length;
    const percent = total > 0 ? (completed.length / total) * 100 : 0;
    setProgress(percent);
  };

  useEffect(() => {
    updateProgress();
    // Listen for storage changes
    const handleStorageChange = () => updateProgress();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [day.slug, day.exercises.length]);

  return (
    <Link
      href={`/giorno/${day.slug}`}
      className="block rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 shadow-sm bg-white dark:bg-zinc-900 hover:shadow-md transition-all hover:scale-[1.02]"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {day.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            {day.focus}
          </p>
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
          {day.exercises.length} es.
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Progresso</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Link>
  );
}

