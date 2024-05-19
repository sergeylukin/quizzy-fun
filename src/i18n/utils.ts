import { languages, ui, defaultLang, showDefaultLang } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const languagePrefixes = Object.keys(languages)
    const hasLanguagePrefix = languagePrefixes.some((prefix) => path.includes(prefix))
    if (hasLanguagePrefix) {
      path = path.replace(new RegExp(`/${languagePrefixes.join('|')}`), '').replace('//', '/')
    }
    return !showDefaultLang && l === defaultLang ? `${path}` : `/${l}${path}`
  }
}
