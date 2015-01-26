({
  block: 'page',
  title: 'Brandname',
  favicon: '/favicon.ico',
  head: [
    { elem: 'meta', attrs: { name: 'description', content: '' } },
    { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
    { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Varela+Round' },
    // { elem: 'css', url: 'http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css' },
    { elem: 'css', url: '_index.css' }
  ],
  scripts: [
    { elem: 'js', url: '_index.js' },
    // { elem: 'js', url: 'hhh.js' }
  ],
  // mods: { theme: 'normal' },
  content: [
    {
      block: 'header',
      // js: true
    },
    {
      block: 'intro',
      content: [{
        block: 'heading',
        mods: { 'arrow': true },
        content: 'A Creative Portfolio Template'
      },{
        tag: 'p',
        content: ['Sed a lorem quis neque interdum ',
        {
          tag: 'a',
          attrs: { href: '#' },
          content: 'consequat ut sed sem'
        }, '. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.']
      }]
    },
    {
      block: 'header',
      // js: true
    }
  ]
})
