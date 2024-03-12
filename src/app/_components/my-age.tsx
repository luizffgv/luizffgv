/**
 * Returns my age in years.
 */
function getMyAge(): number {
  const date_diff = Date.now() - +new Date(2001, 6, 1);
  return Math.floor(date_diff / 3.154e10);
}

/** Displays my age inline. */
export default function MyAge() {
  return <span>{getMyAge()}</span>;
}
