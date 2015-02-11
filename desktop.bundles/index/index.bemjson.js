({
  block: 'page',
  js: true,
  title: 'Halcyon',
  favicon: '/favicon.ico',
  head: [
    { elem: 'meta', attrs: { name: 'description', content: '' } },
    { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
    { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Varela+Round' },
    { elem: 'css', url: '_index.css' }
  ],
  scripts: [
    { elem: 'js', url: '_index.js' },
  ],
  // mods: { theme: 'normal' }
  content: [
    {
      block: 'header',
    },
    {
      block: 'intro',
      title: 'A Creative Portfolio Template',
      content: [{
        elem: 'text',
        content: [
          'Sed a lorem quis neque interdum ',
          {
            elem: 'link',
            url: '#',
            content: 'consequat ut sed sem'
          },
          '. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
          ]
      }]
    },
    {
      block: 'features',
      title: "Love what you do, and you'll do it well",
      content: [{
          block: 'mylist',
          mix: { block: 'features', elem: 'list' },
          content: [
            {
              icon: 'laptop',
              js: { animation: 'fadeInUp' },
              title: 'Digital Design',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
            },
            {
              icon: 'code',
              js: { animation: 'fadeInUp', delay: '0.5s' },
              title: 'Web Development',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
            },
            {
              icon: 'heart',
              js: { animation: 'fadeInUp', delay: '1s' },
              title: 'Creative Direction',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
            }
          ].map(function(item) {
            return [
              {
                elem: 'item',
                js: item.js,
                content: [
                  {
                    elem: 'icon',
                    type: item.icon
                  },
                  {
                    block: 'heading',
                    mods: { 'type': 'list' },
                    content: item.title
                  },
                  {
                    elem: 'item-text',
                    content: item.text
                  }
                ]
              }
            ];
          })
        }
      ]
    },
    {
      block: 'responsive',
      content: [{
        elem: 'col1',
        content: {
          elem: 'pic'
        }
      },
      {
        elem: 'col2',
        content: {
          block: 'slider',
          mix: { block: 'responsive', elem: 'slider' },
          content: [
            {
              elem: 'item',
              content: [
                {
                  block: 'heading',
                  mods: { 'type': 'arrow' },
                  content: 'Responsive Design Specialists'
                },
                {
                  elem: 'text',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero. '
                },
                {
                  elem: 'text',
                  content: 'Mauris ultrices odio vitae nulla ultrices iaculis. Nulla rhoncus odio eu lectus faucibus facilisis. Maecenas ornare augue vitae sollicitudin accumsan. '
                },
                {
                  elem: 'text',
                  content: 'Etiam eget libero et erat eleifend consectetur a nec lectus. Sed id tellus lorem. Suspendisse sed venenatis odio, quis lobortis eros.'
                }
              ]
            },
            {
              elem: 'item',
              content: [
                {
                  block: 'heading',
                  mods: { 'type': 'arrow' },
                  content: 'Bootstrap Professionals'
                },
                {
                  elem: 'text',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero. '
                },
                {
                  elem: 'text',
                  content: 'Mauris ultrices odio vitae nulla ultrices iaculis. Nulla rhoncus odio eu lectus faucibus facilisis. Maecenas ornare augue vitae sollicitudin accumsan. '
                },
                {
                  elem: 'text',
                  content: 'Etiam eget libero et erat eleifend consectetur a nec lectus. Sed id tellus lorem. Suspendisse sed venenatis odio, quis lobortis eros.'
                }
              ]
            }
          ]
        }
      }]
    },
    {
      block: 'swag',
      content: {
          elem: 'slogan',
          content: [
          'I got 99 problems',
          {
            tag: 'span',
            content: "but <em>design</em> 'aint one"
          }]
        }
    },
    {
      block: 'portfolio',
      content: {
        block: 'slider',
        js: { touch: 'false' },
        content: [{
            elem: 'item',
            content: {
              block: 'mylist',
              content: [
                {
                  img: '../../img/portfolio-01.jpg',
                  js: { animation: 'fadeInDown' },
                  title: 'Creative Minds',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                },
                {
                  img: '../../img/portfolio-02.jpg',
                  js: { animation: 'fadeInDown', delay: '0.5s' },
                  title: 'Creative Hearts',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                },
                {
                  img: '../../img/portfolio-03.jpg',
                  js: { animation: 'fadeInDown', delay: '1s' },
                  title: 'Creative Ideas',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                }
              ].map(function(item) {
                return [{
                  elem: 'item',
                  js: item.js,
                  content: [
                    {
                      elem: 'overlay',
                      content: {
                        block: 'overlay',
                        image: item.img
                      }
                    },
                    {
                      block: 'heading',
                      mods: { 'type': 'list' },
                      content: item.title
                    },
                    {
                      elem: 'item-text',
                      content: item.text
                    }
                  ]
                }];
              })
            }
          },
          {
            elem: 'item',
            content: {
              block: 'mylist',
              content: [
                {
                  img: '../../img/portfolio-01.jpg',
                  js: { animation: 'fadeInDown' },
                  title: 'Creative Minds',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                },
                {
                  img: '../../img/portfolio-02.jpg',
                  js: { animation: 'fadeInDown', delay: '0.5s' },
                  title: 'Creative Hearts',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                },
                {
                  img: '../../img/portfolio-03.jpg',
                  js: { animation: 'fadeInDown', delay: '1s' },
                  title: 'Creative Ideas',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                }
              ].map(function(item) {
                return [{
                  elem: 'item',
                  js: item.js,
                  content: [
                    {
                      elem: 'overlay',
                      content: {
                        block: 'overlay',
                        image: item.img
                      }
                    },
                    {
                      block: 'heading',
                      mods: { 'type': 'list' },
                      content: item.title
                    },
                    {
                      elem: 'item-text',
                      content: item.text
                    }
                  ]
                }];
              })
            }
          }
        ]
      }
    },
    {
      block: 'ignite'
    },
    {
      block: 'team',
      title: "We're a team that adore what we do",
      content: {
        block: 'team',
        elem: 'list',
        content: {
          block: 'slider',
          content: [
            {
              elem: 'item',
              content: {
                block: 'mylist',
                content: [
                  {
                    js: { animation: 'fadeInUp' },
                    img: '../../img/team-01.png',
                    title: 'Jon Snow',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                  },
                  {
                    js: { animation: 'fadeInUp', delay: '0.5s' },
                    img: '../../img/team-02.png',
                    title: 'Cersei Lannister',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                  },
                  {
                    js: { animation: 'fadeInUp', delay: '1s' },
                    img: '../../img/team-03.png',
                    title: 'Jamie Lannister',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                  }
                ].map(function(item) {
                  return [{
                    elem: 'item',
                    js: item.js,
                    content: [
                      {
                        elem: 'image',
                        attrs: { src: item.img, alt: 'Team Member' }
                      },
                      {
                        block: 'heading',
                        mods: { 'type': 'list' },
                        content: item.title
                      },
                      {
                        elem: 'item-text',
                        content: item.text
                      },
                      {
                        elem: 'social',
                        content: {
                          block: 'social'
                        }
                      }
                    ]
                  }];
                })
              }
            },
            {
              elem: 'item',
              content: {
                block: 'mylist',
                content: [
                  {
                    js: { animation: 'fadeInUp' },
                    img: '../../img/team-01.png',
                    title: 'Jon Snow',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                  },
                  {
                    js: { animation: 'fadeInUp', delay: '0.5s' },
                    img: '../../img/team-02.png',
                    title: 'Cersei Lannister',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                  },
                  {
                    js: { animation: 'fadeInUp', delay: '1s' },
                    img: '../../img/team-03.png',
                    title: 'Jamie Lannister',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.'
                  }
                ].map(function(item) {
                  return [{
                    elem: 'item',
                    js: item.js,
                    content: [
                      {
                        elem: 'image',
                        attrs: { src: item.img, alt: 'Team Member' }
                      },
                      {
                        block: 'heading',
                        mods: { 'type': 'list' },
                        content: item.title
                      },
                      {
                        elem: 'item-text',
                        content: item.text
                      },
                      {
                        elem: 'social',
                        content: {
                          block: 'social',
                          content: [
                            {
                              elem: 'item',
                              type: 'dribble'
                            },
                            {
                              elem: 'item',
                              type: 'twitter'
                            },
                            {
                              elem: 'item',
                              type: 'email'
                            }
                          ]
                        }
                      }
                    ]
                  }];
                })
              }
            }
          ]
        }
      }
    },
    {
      block: 'subscribe'
    },
    {
      block: 'contact',
      title: 'Drop Us a Line',
      content: [
        {
          block: 'row',
          mix: { block: 'contact', elem: 'details' },
          content: {
            block: 'mylist',
            mods: { 'contact': true },
            js: false,
            content: [
              {
                icon: 'marker',
                title: 'Address',
                text: 'Level 6, 23 Pitt St, Sydney'
              },
              {
                icon: 'phone',
                title: 'Phone',
                text: '+61 9 211 3747'
              },
              {
                icon: 'email',
                title: 'Email',
                text: '<a href="#">hey@halcyondays.com</a>'
              }
            ].map(function(item) {
              return [{
                elem: 'item',
                content: [
                  {
                    block: 'heading',
                    mods: { 'type': 'contact' },
                    icon: item.icon,
                    content: item.title
                  },
                  {
                    elem: 'item-text',
                    content: item.text
                  }
                ]
              }];
            })
          }
        },
        {
          block: 'contact',
          elem: 'social'
        }
      ]
    },
    {
      block: 'footer'
    }
  ]
})