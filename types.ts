export type MuscleGroup =
  | "petto"
  | "spalle"
  | "schiena"
  | "gambe"
  | "core"
  | "braccia"
  | "full";

export type Difficulty = "base" | "intermedio" | "avanzato";

export type DaySlug =
  | "lunedi"
  | "martedi"
  | "mercoledi"
  | "giovedi"
  | "venerdi"
  | "sabato"
  | "domenica";

export type Exercise = {
  id: string;
  title: string;
  muscleGroup: MuscleGroup;
  youtubeId: string;
  sets: number;
  reps: string;
  restSec?: number;
  difficulty?: Difficulty;
  equipment?: string[];
  notes?: string;
};

export type DayPlan = {
  slug: DaySlug;
  title: string;
  focus: string;
  exercises: Exercise[];
};

export type Schedule = {
  week: DayPlan[];
};

