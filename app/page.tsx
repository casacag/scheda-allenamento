import schedule from "@/data/schedule.json";
import DayCard from "@/components/DayCard";
import type { Schedule } from "@/types";

const scheduleData = schedule as Schedule;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          La tua scheda settimanale
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Allenati a casa con video guida e tieni traccia dei tuoi progressi.
          Ogni giorno ha un focus specifico per risultati ottimali.
        </p>
      </section>

      {/* Days Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {scheduleData.week.map((day) => (
            <DayCard key={day.slug} day={day} />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 text-center">
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
            7
          </div>
          <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
            Giorni di allenamento
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 text-center">
          <div className="text-3xl font-bold text-green-700 dark:text-green-300">
            {scheduleData.week.reduce(
              (sum, day) => sum + day.exercises.length,
              0
            )}
          </div>
          <div className="text-sm text-green-600 dark:text-green-400 mt-1">
            Esercizi totali
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 text-center">
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
            Full Body
          </div>
          <div className="text-sm text-purple-600 dark:text-purple-400 mt-1">
            Approccio completo
          </div>
        </div>
      </section>
    </div>
  );
}

