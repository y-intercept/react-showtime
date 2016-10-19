const h = require('react-hyperscript')
const { Link } = require('react-router')

module.exports = props =>
  h('div.pa4', [
    h('h2', 'Challenges'),
    h('ul.list', [
      h('li', [ h(Link, { to: '/', className: 'link'}, 'Home')]),
      h('li', [ h(Link, { to: '/moviedb', className: 'link'}, 'Movie Db Search')]),
      h('li', [ h(Link, { to: '/youtube', className: 'link'}, 'YouTube Search')]),
      h('li', [ h(Link, { to: '/spotify', className: 'link'}, 'Spotify Search')])
    ])
  ])
