import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import $ from 'jquery'
import { CircularProgress } from '@material-ui/core'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  margin: {
    margin: '1.5rem 0',
    display: 'block'
  },

  progress: {
    marginRight: '1rem'
  },

  disable: {
    opacity: '.3',
    pointerEvents: 'none'
  }
})

class Register extends React.Component {
  formRef = React.createRef()

  clickRegister = () => {
    const value = {}
    $(this.formRef.current)
      .find('input')
      .each(function() {
        const $this = $(this)
        const name = $this.prop('name')

        if (!name) return

        value[name] = $this.val()
        // console.log($this.prop('name'))
      })

    // console.log(value)
    this.props.onRegister(value)
  }

  render() {
    const { classes, message, complete } = this.props

    const commonProps = {
      fullWidth: true,
      className: classes.margin
    }

    // const fields = [
    //   {
    //     ...commonProps,
    //     label: "Tên(props)đăng nhập",
    //     id: "userna(props)e",
    //   }
    // ]

    return (
      <div ref={this.formRef}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Đăng kí thành viên Richii
          </Typography>
          <div className={!complete ? classes.disable : ''}>
            <TextField
              {...commonProps}
              label="Tên đăng nhập"
              name="username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              {...commonProps}
              label="Họ và tên"
              name="fullName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              className={classes.margin}
              label="Số CMND"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              className={classes.margin}
              label="Số di động"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              {...commonProps}
              label="Email"
              name="email"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              {...commonProps}
              label="Mật khẩu"
              name="password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
          </div>
          {message && <div className={classes.margin}>{message}</div>}
          <div>
            <Button
              onClick={this.clickRegister}
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              disabled={!complete}
            >
              <div>
                {complete || (
                  <CircularProgress
                    className={classes.progress}
                    variant="indeterminate"
                    color="inherit"
                    size={20}
                  />
                )}
                Đăng kí
              </div>
            </Button>
          </div>
        </Paper>
      </div>
    )
  }

  static defaultProps = {
    onChange: () => {},
    message: null,
    complete: true
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    complete: PropTypes.bool
  }
}

export default withStyles(styles)(Register)
