import english from '../locales/en/nav.json'
import russian from '../locales/ru/nav.json'

export const showDefaultLang = false

export const languages = {
  en: 'English',
  ru: 'Русский',
}

export const defaultLang = 'en'

export const ui = {
  en: english,
  ru: russian,
} as const

export const routes = {
  de: {
    services: 'leistungen',
  },
  fr: {
    services: 'prestations-de-service',
  },
}
