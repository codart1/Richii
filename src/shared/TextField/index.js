import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'

export default function TextField() {
  return (
    <TextField
      {...commonProps}
      value={values.email}
      className={errors.email && touched.email ? classes.error : ''}
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
  )
}
