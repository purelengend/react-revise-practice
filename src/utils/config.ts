// Check import.meta.env is undefined in test environment
export const required = (key: string, defaultValue = undefined) => {
  if (import.meta.env) return import.meta.env[key];
  return defaultValue;
};
