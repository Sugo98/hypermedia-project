import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/andre/Documents/Università/Magistrale/2° Anno/2° Semestre/Hypermedia Applications/Progetto/hypermedia-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}