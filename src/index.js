import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from './components/Container'
import { withStyles } from '@material-ui/core/styles'
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
  }
}

function App({ classes }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.background}>
        <Container size="small" className={classes.margin}>
          <Register />
        </Container>
      </div>
    </React.Fragment>
  )
}

const StyledApp = withStyles(styles)(App)

ReactDOM.render(<StyledApp />, document.querySelector('#app'))
