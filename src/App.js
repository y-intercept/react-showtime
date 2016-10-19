const { Router, Route, hashHistory } = require('react-router')
const h = require('react-hyperscript')
const Home = require('./components/home')
const Moviedb = require('./components/moviedb')
const Spotify = require('./components/spotify')
const Youtube = require('./components/youtube')

module.exports = _ =>
  h(Router, { history: hashHistory }, [
    h(Route, { path: '/', component: Home}),
    h(Route, { path: '/moviedb', component: Moviedb}),
    h(Route, { path: '/spotify', component: Spotify}),
    h(Route, { path: '/youtube', component: Youtube})
  ])
