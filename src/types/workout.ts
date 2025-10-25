import type { Intencity } from "./intencity";

export interface Workout {
  id: string;
  userId: string;
  title: string;
  durationMinutes: number;
  intensity: Intencity;
  date: string;
  notes?: string;
}