/**
 * Utility function to convert snake_case keys to camelCase.
 * @param obj - The object with snake_case keys.
 * @returns - New object with camelCase keys.
 */
export function convertKeysToCamelCase(obj: any) {
  const newObj: any = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
      newObj[camelCaseKey] = obj[key];
    }
  }
  return newObj;
}

export function normalizeText(text: string): string {
  let normalizedText = text.trim().toLowerCase();

  normalizedText = normalizedText
    .replace(/[\u064B-\u065F]/g, "")
    .replace(/[\u0622\u0623\u0625\u0671]/g, "ا")
    .replace(/[\u0649\u064A]/g, "ي")
    .replace(/[\u0648\u0624]/g, "و");

  return normalizedText;
}
