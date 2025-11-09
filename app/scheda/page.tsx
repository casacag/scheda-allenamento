"use client";

import schedule from "@/data/schedule.json";
import type { Schedule, Exercise, MuscleGroup, Difficulty } from "@/types";
import { useState, useMemo } from "react";
import Link from "next/link";

const scheduleData = schedule as Schedule;

// Flatten all exercises from all days
const allExercises: Array<Exercise & { dayTitle: string; daySlug: string }> =
  scheduleData.week.flatMap((day) =>
    day.exercises.map((ex) => ({
      ...ex,
      dayTitle: day.title,
      daySlug: day.slug,
    }))
  );

export default function SchedaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [muscleFilter, setMuscleFilter] = useState<MuscleGroup | "all">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<
    Difficulty | "all"
  >("all");

  const filteredExercises = useMemo(() => {
    return allExercises.filter((ex) => {
      const matchesSearch =
        searchQuery === "" ||
        ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.muscleGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.notes?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMuscle =
        muscleFilter === "all" || ex.muscleGroup === muscleFilter;

      const matchesDifficulty =
        difficultyFilter === "all" || ex.difficulty === difficultyFilter;

      return matchesSearch && matchesMuscle && matchesDifficulty;
    });
  }, [searchQuery, muscleFilter, difficultyFilter]);

  const muscleGroups: Array<{ value: MuscleGroup | "all"; label: string }> = [
    { value: "all", label: "Tutti" },
    { value: "petto", label: "Petto" },
    { value: "spalle", label: "Spalle" },
    { value: "schiena", label: "Schiena" },
    { value: "gambe", label: "Gambe" },
    { value: "core", label: "Core" },
    { value: "braccia", label: "Braccia" },
    { value: "full", label: "Full Body" },
  ];

  const difficulties: Array<{ value: Difficulty | "all"; label: string }> = [
    { value: "all", label: "Tutte" },
    { value: "base", label: "Base" },
    { value: "intermedio", label: "Intermedio" },
    { value: "avanzato", label: "Avanzato" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Torna alla home
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Tutti gli esercizi
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Esplora l'intera libreria di esercizi. Usa i filtri per trovare quello
          che cerchi.
        </p>
      </header>

      {/* Search and Filters */}
      <section className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cerca esercizi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Muscle Group Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Gruppo muscolare
            </label>
            <select
              value={muscleFilter}
              onChange={(e) =>
                setMuscleFilter(e.target.value as MuscleGroup | "all")
              }
              className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {muscleGroups.map((group) => (
                <option key={group.value} value={group.value}>
                  {group.label}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Difficoltà
            </label>
            <select
              value={difficultyFilter}
              onChange={(e) =>
                setDifficultyFilter(e.target.value as Difficulty | "all")
              }
              className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map((diff) => (
                <option key={diff.value} value={diff.value}>
                  {diff.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {filteredExercises.length} esercizi trovati
        </div>
      </section>

      {/* Exercises Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExercises.map((ex) => (
          <Link
            key={`${ex.daySlug}-${ex.id}`}
            href={`/giorno/${ex.daySlug}#${ex.id}`}
            className="block rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 bg-white dark:bg-zinc-900 hover:shadow-md transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 flex-1">
                {ex.title}
              </h3>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 dark:text-zinc-400">📍</span>
                <span className="text-zinc-600 dark:text-zinc-400 capitalize">
                  {ex.muscleGroup}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-zinc-500 dark:text-zinc-400">🏋️</span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {ex.sets}×{ex.reps}
                </span>
              </div>

              {ex.difficulty && (
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 dark:text-zinc-400">⭐</span>
                  <span className="text-zinc-600 dark:text-zinc-400 capitalize">
                    {ex.difficulty}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  {ex.dayTitle}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filteredExercises.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Nessun esercizio trovato con i filtri selezionati.
          </p>
        </div>
      )}
    </div>
  );
}

