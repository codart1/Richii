import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  err: {
    border: '1px solid red',
    borderRadius: '3px',
    padding: '1rem',
    color: 'red'
  },

  info: {
    border: '1px solid green',
    borderRadius: '3px',
    padding: '1rem',
    color: 'green'
  }
}

function Notice({ children, className, classes: c, type }) {
  return <div className={[c[type], className].join(' ')}>{children}</div>
}

Notice.defaultProps = {
  type: 'info'
}

Notice.propsType = {
  type: PropTypes.string
}

export default withStyles(styles)(Notice)
