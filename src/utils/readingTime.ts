/** Calcule le temps de lecture en minutes (200 mots/min). Minimum 1 min. */
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
