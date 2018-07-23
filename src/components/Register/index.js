import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import { CircularProgress } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

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
  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      classes,
      message
    } = this.props

    const commonProps = name => {
      let normals = {
        fullWidth: true,
        className: classes.margin,
        onChange: handleChange,
        onBlur: handleBlur
      }

      if (name) {
        return {
          ...normals,
          value: values[name],
          helperText: errors[name] && touched[name] ? errors[name] : null,
          error: errors[name] && touched[name],
          name
        }
      }

      return normals
    }

    const fields = (
      <div className={isSubmitting ? classes.disable : ''}>
        <TextField
          {...commonProps('email')}
          label="Email *"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon className={classes.icon}>email</Icon>
              </InputAdornment>
            )
          }}
        />
        <TextField
          {...commonProps('password')}
          type="password"
          label="Mật khẩu *"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon className={classes.icon}>fingerprint</Icon>
              </InputAdornment>
            )
          }}
        />
        {/* <TextField
          {...commonProps()}
          label="Tên đăng nhập"
          name="username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        /> */}
        <TextField
          {...commonProps('fullName')}
          label="Họ và tên"
          name="fullName"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon className={classes.icon}>face</Icon>
              </InputAdornment>
            )
          }}
        />
        <TextField
          {...commonProps('idCardNumber')}
          label="Số CMND"
          name="idCardNumber"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon className={classes.icon}>chrome_reader_mode</Icon>
              </InputAdornment>
            )
          }}
        />
        <TextField
          {...commonProps('phoneNumber')}
          label="Số di động"
          name="phoneNumber"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon className={classes.icon}>phone</Icon>
              </InputAdornment>
            )
          }}
        />
      </div>
    )

    return (
      <div ref={this.formRef}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Đăng kí thành viên Richii
          </Typography>
          {fields}
          {message && <div className={classes.margin}>{message}</div>}
          <div>
            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              disabled={isSubmitting}
            >
              <div>
                {isSubmitting && (
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
    message: null
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }
}

export default withStyles(styles)(Register)
