import schedule from "@/data/schedule.json";
import ExerciseCard from "@/components/ExerciseCard";
import Link from "next/link";
import type { Schedule } from "@/types";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const scheduleData = schedule as Schedule;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return scheduleData.week.map((day) => ({
    slug: day.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const day = scheduleData.week.find((d) => d.slug === params.slug);
  if (!day) return {};

  return {
    title: `${day.title} - ${day.focus} | Scheda Fitness Home`,
    description: `Allenamento ${day.title}: ${day.focus}. ${day.exercises.length} esercizi con video guida.`,
  };
}

export default function DayPage({ params }: Props) {
  const day = scheduleData.week.find((d) => d.slug === params.slug);

  if (!day) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
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
        Torna alla scheda
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          {day.title}
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{day.focus}</p>
          <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
            {day.exercises.length} esercizi
          </span>
        </div>
      </header>

      {/* Exercises List */}
      <section className="space-y-4">
        {day.exercises.map((ex, index) => (
          <div key={ex.id} id={ex.id}>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold">
                {index + 1}
              </span>
              <h2 className="sr-only">{ex.title}</h2>
            </div>
            <ExerciseCard daySlug={day.slug} ex={ex} />
          </div>
        ))}
      </section>

      {/* Bottom Navigation */}
      <nav className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          {getPreviousDay(day.slug) ? (
            <Link
              href={`/giorno/${getPreviousDay(day.slug)}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm"
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Giorno precedente
            </Link>
          ) : (
            <div />
          )}
          {getNextDay(day.slug) ? (
            <Link
              href={`/giorno/${getNextDay(day.slug)}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm"
            >
              Giorno successivo
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}

function getPreviousDay(currentSlug: string) {
  const index = scheduleData.week.findIndex((d) => d.slug === currentSlug);
  if (index <= 0) return null;
  return scheduleData.week[index - 1].slug;
}

function getNextDay(currentSlug: string) {
  const index = scheduleData.week.findIndex((d) => d.slug === currentSlug);
  if (index === -1 || index === scheduleData.week.length - 1) return null;
  return scheduleData.week[index + 1].slug;
}

