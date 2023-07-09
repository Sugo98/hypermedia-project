import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/andre/Documents/Università/Magistrale/2° Anno/2° Semestre/Hypermedia Applications/Progetto/hypermedia-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}