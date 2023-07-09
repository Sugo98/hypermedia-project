// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public:{
            baseURL: 'http://localhost:3000',
            supabaseURL: process.env.SUPABASE_URL_MY,
            supabaseKEY: process.env.SUPABASE_KEY_MY,
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    modules: ['@nuxtjs/supabase'],
    app: {
        head: {
            title: "Yellow Dragons",
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
        }
    },
})
