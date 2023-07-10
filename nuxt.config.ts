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
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
            meta: [
                {name: "description"},
                {content: "Welcome to our venture capital firm! We specialize in investing in innovative startups with high growth potential. Our experienced team provides strategic guidance, mentorship, and funding to help entrepreneurs turn their ideas into successful businesses. Explore our focus areas, learn about our portfolio companies, and get in touch with us to discuss investment opportunities. Start your entrepreneurial journey with us today!"}
            ]
        }
    },
})
