import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'
import htmx from 'astro-htmx'
import alpinejs from '@astrojs/alpinejs'
import liciousI18n from '@astrolicious/i18n'
const defaultLocale = 'en'
// const locales = {
//   en: 'en-US',
//   // the `defaultLocale` value must present in `locales` keys
//   ru: 'ru-RU',
// }
const locales = ['en', 'ru']

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  // trailingSlash: 'always',
  // build: {
  //   format: 'file'
  // },
  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
    htmx(),
    alpinejs(),
    liciousI18n({
      defaultLocale,
      locales,
    }),
  ],
})

