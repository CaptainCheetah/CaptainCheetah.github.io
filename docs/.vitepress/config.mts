import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Adrian Bartel",
  description: "Personal projects",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Diversions', link: '/diversions' }
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Diversions', link: '/diversions' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CaptainCheetah' }
    ]
  }
})
