import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  margin: {
    margin: "1.5rem 0",
    display: "block"
  }
});

function PaperSheet(props) {
  const { classes, onRegister, message } = props;

  let values = {};

  const onChange = e => {
    values[e.target.name] = e.target.value;
  };

  const clickRegister = () => {
    onRegister(values);
  };

  const commonProps = {
    fullWidth: true,
    className: classes.margin,
    onChange
  };

  // const fields = [
  //   {
  //     ...commonProps,
  //     label: "Tên đăng nhập",
  //     id: "username",
  //   }
  // ]

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Đăng kí thành viên Richii
        </Typography>
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
        {message && <div>{message}</div>}
        <div>
          <Button
            onClick={clickRegister}
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
          >
            Đăng kí
          </Button>
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.defaultProps = {
  onChange: () => {},
  message: null
};

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  message: PropTypes.oneOf([PropTypes.string, PropTypes.element])
};

export default withStyles(styles)(PaperSheet);
