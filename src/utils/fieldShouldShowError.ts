export const fieldShouldShowError = (
  error: string | undefined,
  touched: boolean | undefined,
  submitCount: number,
): boolean => Boolean(error && (touched || submitCount > 0));
