module.exports = {
  lang: 'en-US',
  title: 'Quasar Wrapper',
  description: 'Quasar Wrapper',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'Github',
        link: '...'
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/'
      },
      {
        text: 'Components',
        children: [
          { text: 'Button', link: '/guide/button/button' }
        ]
      }
    ]
  }
}
