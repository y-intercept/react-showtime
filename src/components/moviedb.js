const h = require('react-hyperscript')
const React = require('react')
const {
  Link
} = require('react-router')
const xhr = require('xhr')

const Moviedb = React.createClass({
  getInitialState: function() {
    return {
      s: '',
      r: 'json',
      movies: []
    }
  },
  handleChange: function(e) {
    this.setState({
      s: e.target.value
    })
  },
  handleSubmit: function(e) {
    e.preventDefault()
    console.log(this.state.s)
    xhr({
      method: 'GET',
      json: true,
      url: `https://www.omdbapi.com/?r=json&s=${this.state.s}`

    }, (err, res, body) => {
      if (err) {
        return console.log(err.message)
      }
      this.setState({
        movies: body.Search,
        s: this.state.s,
        r: this.state.r
      })
    })
  },
  render: function() {
    console.log(this.state)
    return (
      h('div.pl2', [
        h('h1', 'Movies'),
        h('form', {
          onSubmit: this.handleSubmit
        }, [
          h('input', {
            onChange: this.handleChange
          })
        ]),
        //h('button.mt2', 'Browse All Movies'),
        h(Link, {
          to: '/',
          className: 'link db mt2'
        }, 'Home'),
        h('div', this.state.movies.map(movie =>
          h('img', {
            src: movie.Poster
          })
        ))
      ])
    )
  }
})

module.exports = Moviedb
