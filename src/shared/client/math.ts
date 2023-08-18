/**
 * Interpolate a value in a range between -1 and 1
 * https://stats.stackexchange.com/questions/178626/how-to-normalize-data-between-1-and-1
 */
export const normMinus = (value: number, max: number) => 2 * (value / max) - 1;

/**
 * Interpolate a value in a range between 0 and 1
 * https://stats.stackexchange.com/questions/178626/how-to-normalize-data-between-1-and-1
 */
export const normZero = (value: number, max: number) => value / max;

/** Get a value in a range between `from` and `to` by weight (range between 0 and 1) */
export const lerp = (from: number, to: number, weight: number) =>
  from + weight * (to - from);

/** Get a value moved towards `to` by `delta` */
export const moveTowards = (current: number, to: number, delta: number) => {
  const diff = to - current;
  return Math.abs(diff) <= delta ? to : current + Math.sign(diff) * delta;
};
