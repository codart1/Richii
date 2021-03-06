import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from './shared/Container'
import { withStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import 'typeface-roboto'

import Register from './containers/Register'

const styles = {
  margin: {
    margin: '1rem auto'
  },

  background: {
    backgroundImage: 'url(https://i.imgur.com/CHz90qs.jpg?1)',
    overflow: 'auto',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },

  all: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
  }
}

function App({ classes }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Richii group</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <CssBaseline />
      <div className={`${classes.background} ${classes.all}`}>
        <Container size="small" className={classes.margin}>
          <Register />
        </Container>
      </div>
    </React.Fragment>
  )
}

const StyledApp = withStyles(styles)(App)

ReactDOM.render(<StyledApp />, document.querySelector('#app'))
