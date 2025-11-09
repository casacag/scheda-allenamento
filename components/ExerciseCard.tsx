"use client";

import { useState, useEffect } from "react";
import YouTubePlayer from "./YouTubePlayer";

type Props = {
  daySlug: string;
  ex: {
    id: string;
    title: string;
    muscleGroup: string;
    youtubeId: string;
    sets: number;
    reps: string;
    restSec?: number;
    notes?: string;
    difficulty?: string;
    equipment?: string[];
  };
};

export default function ExerciseCard({ daySlug, ex }: Props) {
  const storageKey = `progress:${daySlug}`;
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    setDone(arr.includes(ex.id));
  }, [storageKey, ex.id]);

  const toggleDone = () => {
    const raw = localStorage.getItem(storageKey);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    const next = done
      ? arr.filter((i) => i !== ex.id)
      : [...new Set([...arr, ex.id])];
    localStorage.setItem(storageKey, JSON.stringify(next));
    setDone(!done);
    // Trigger event for progress update
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-4 md:p-5 shadow-sm bg-white dark:bg-zinc-900 transition-colors">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {ex.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 capitalize">
                {ex.muscleGroup}
              </span>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {ex.sets}×{ex.reps}
              </span>
              {ex.restSec && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">•</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    recupero {ex.restSec}s
                  </span>
                </>
              )}
              {ex.difficulty && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">•</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 capitalize">
                    {ex.difficulty}
                  </span>
                </>
              )}
            </div>
            {ex.equipment && ex.equipment.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {ex.equipment.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          <label className="inline-flex items-center gap-2 text-sm cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={done}
              onChange={toggleDone}
              className="h-5 w-5 rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-zinc-700 dark:text-zinc-300">Fatto</span>
          </label>
        </div>

        {ex.notes && (
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800 p-3 rounded-lg">
            💡 {ex.notes}
          </p>
        )}

        <button
          onClick={() => setOpen(true)}
          className="mt-3 rounded-xl px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-zinc-100"
        >
          🎥 Guarda video
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto max-w-3xl w-full rounded-2xl bg-white dark:bg-zinc-900 p-4 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {ex.title}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {ex.sets}×{ex.reps}
                  {ex.restSec ? ` • ${ex.restSec}s recupero` : ""}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Chiudi"
                className="text-2xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors leading-none"
              >
                ✕
              </button>
            </div>
            <div className="mt-3">
              <YouTubePlayer id={ex.youtubeId} title={ex.title} />
            </div>
            {ex.notes && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  💡 {ex.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

