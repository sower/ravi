import type { UserModule } from './types'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { createApp as createComponet } from 'vue'
import { routes } from 'vue-router/auto-routes'
import { AppProvider } from '~/components/Application'

import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/styles/main.css'

const appProvider = createComponet(AppProvider)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: setupLayouts(routes), base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    appProvider.mount('#appProvider', true)
    // ctx.app.use(Previewer)
  },
)
