type FunctionProps<T> = Promise<T> | (() => Promise<T>);
type FallbackProps = (error: unknown) => void;

export async function tc<T>(
  fn: FunctionProps<T>,
  fallback?: FallbackProps
): Promise<T | undefined> {
  try {
    return typeof fn === 'function' ? await fn() : await fn;
  } catch (error) {
    fallback?.(error);
    return;
  }
}
