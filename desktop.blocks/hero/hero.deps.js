({
  mustDeps: [{
    block: 'base'
  }],
  shouldDeps: [
  {
    block: 'toggle-btn'
  },
  {
    block: 'logo',
    elems: [
      { elem: 'title', mods: { 'animated': true } },
      { elem: 'desc', mods: { 'animated': true } }
    ]
  },
  {
    block: 'bttn'
  }]
})