const BASE_URL = import.meta.env.PUBLIC_BASE_URL;
const LOCALE_REGEX = /^\/?(en|pt)/;

export function getPath(oldPath?: string, newPath?: string) {
  const normalizedBaseUrl = `/${BASE_URL.replace(/^\/|\/$/g, '')}`;
  const pathWithoutBase = oldPath?.replace(normalizedBaseUrl, '') || '';
  const localeMatch = pathWithoutBase.match(LOCALE_REGEX);
  const locale = localeMatch ? localeMatch[0] : '';

  if (newPath) {
    const cleanNewPath = newPath.startsWith('/') ? newPath : `/${newPath}`;
    return `${normalizedBaseUrl}${locale}${cleanNewPath}`;
  }

  const pathWithoutLocale = pathWithoutBase.replace(LOCALE_REGEX, '');

  if (pathWithoutLocale.startsWith('/')) {
    return pathWithoutLocale || '/';
  }

  return `/${pathWithoutLocale}`;
}
